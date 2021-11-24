const axios = require("axios"); // App uses Axios for requests
const express = require("express");
const path = require("path");
const app = express();
const { spawn } = require("child_process"); // A python child process is used to train a neural network model and predict currency data by using the model
const port = process.env.PORT || 3000; // If app in run on Heroku, it will use the port Heroku gives it, else it uses port 3000
/*
 App uses .csv files when it fetches upto date data, the .csv file is then read by the Python child process,
 this is done due to poe.ninja not allowing non-server entities to fetch data from their API
*/
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
let pathToPython = "./ML/Original/web_pred.py"; // Default path to python file directory
app.use(express.static("public")); // App uses 'public' folder
app.use(express.json()); // This allows JSON requests to be read by the backend

app.post("/api/setModel", (req, res) => {
  pathToPython = `./ML/${req.body.model}/web_pred.py`; // Path changes between 'Original' and 'User'
  res.send(`Changed model to ${req.body.model}`); // Response that is sent to frontend
});

/*
This API endpoint fetches current poe.ninja currency data from the 'Scourge' league and writes it to a .csv file
*/
app.get("/api/getCurrenctData", (req, res) => {
  async function fetchData() {
    const result = await axios
      .get(
        `https://poe.ninja/api/data/CurrencyOverview?league=Scourge&type=Currency` // This api call fetches all of the currency types from poe.ninja api
      )
      .catch(function (error) {
        if (error.response) {
          res.send({});
        }
      });
    let nameArray = [];
    let idArray = [];
    /*
     Poe.ninja api response is divided into 2 arrays, 'lines' and 'currencyDetails',
     these arrays have a different order for the items, so we need to iterate trough both of them and save the name and id to arrays
    */
    for (let item of result.data.lines) {
      for (let detail of result.data.currencyDetails) {
        if (item.currencyTypeName === detail.name) {
          nameArray.push(item.currencyTypeName);
          idArray.push(detail.id);
        }
      }
    }

    /*
      Get historic data from the current league and save it to an array as a JSON object
    */
    let data = [];
    for (let i = 0; i < nameArray.length; i++) {
      const ninjaHistory = await axios.get(
        `https://poe.ninja/api/data/CurrencyHistory?league=Scourge&type=Currency&currencyId=${idArray[i]}` // This api call is done approximately 130 times, once for each currency item
      );
      for (
        let a = 0;
        a < ninjaHistory.data.receiveCurrencyGraphData.length;
        a++
      ) {
        let obj = {
          Name: nameArray[i],
          Price: ninjaHistory.data.receiveCurrencyGraphData[a].value,
          Day: a + 1, // Start count from 1
          League: "Scourge", // All of the items are from the same league
        };
        data.push(obj);
      }
    }

    /*
    Setting the path and headers for the .csv file
    */
    const csvWriter = createCsvWriter({
      path: "./ML/User/out.csv",
      header: [
        { id: "Name", title: "Name" },
        { id: "Price", title: "Price" },
        { id: "Day", title: "Day" },
        { id: "League", title: "League" },
      ],
    });
    // Writing the data to the .csv file
    csvWriter
      .writeRecords(data)
      .then(() => console.log("The CSV file was written successfully"));

    res.send(`Finished getting data!`); // Response for frontend
  }
  fetchData();
});

/*
  This api endpoint creates a new python child process to train a new neural network with User given parameters.
*/
app.post("/api/createNewModel", (req, res) => {
  req.setTimeout(0); // Timeout is set to never time out the request, since it will take multiple minutes to train even a small neural network.
  // Cut request into parts for clearer code
  let epochs = req.body.fitsettings.epochs;
  let batchsize = req.body.fitsettings.batchsize;
  let layersettings = req.body.layersettings;
  /*
    Backend check for the parameters, so that incorrect parameters cannot be sent to the child process.
    Checks for correct number and type of Epochs, Batch size and all of the layers.
    If parameters are incorrect, send a response to frontend.
  */
  if (
    epochs < 1 ||
    epochs > 1000 ||
    isNaN(epochs) ||
    Number.isInteger(epochs) ||
    !(epochs % 1 === 0)
  ) {
    return res.send(
      `ERROR: Epochs must be an integer equal or greater than 1, and less than 1000, received ${epochs}`
    );
  } else if (
    batchsize < 1 ||
    batchsize > 1000 ||
    isNaN(batchsize) ||
    Number.isInteger(batchsize) ||
    !(batchsize % 1 === 0)
  ) {
    return res.send(
      `ERROR: Batch Size must be an integer equal or greater than 1, and less than 1000, received ${batchsize}`
    );
  } else if (layersettings.length === 0 || layersettings.length > 10) {
    return res.send(
      `ERROR: Layer amount must be between 1 and 10, received ${layersettings.length}`
    );
  }

  for (let i = 0; i < layersettings.length; i++) {
    if (
      layersettings[i].amount < 1 ||
      layersettings[i].amount > 1000 ||
      isNaN(layersettings[i].amount) ||
      Number.isInteger(layersettings[i].amount) ||
      !(layersettings[i].amount % 1 === 0)
    ) {
      return res.send(
        `ERROR: One or more of the layers had incorrect amount of units`
      );
    }
  }
  // If all of the parameters are OK, a JSON object is made. This JSON object is sent to the child process.
  let obj = {
    epochs: epochs,
    batch_size: batchsize,
    layer_settings: layersettings,
  };

  async function trainModel() {
    var largeDataSet = [];
    /*
      Spawn a child process of type 'python', with arguments that containt the path to the file and stringified JSON object.
    */
    const python = spawn("python", [`./ML/User/web.py`, JSON.stringify(obj)]);
    for await (const data of python.stdout) {
      // This loop listens to the python child process' console and saves it to an array, this is mainly for debugging.
      largeDataSet.push(data.toString());
    }
    // Logging, these are mainly used for debugging in this app
    python.on("error", (code) => {
      console.log("on error");
      console.log(code);
    });
    python.on("exit", (code) => {
      console.log("on exit");
      console.log(code);
    });
    python.on("close", async (code) => {
      console.log(largeDataSet);
      console.log("entered 'on close'");
      console.log(code);
      return res.send(`User created model is now ready to be loaded!`); // Send response to frontend.
    });
  }
  trainModel();
});

/*
  This api endpoint spawns a python child process that uses the neural network to predict currency data for the current league and sends that data to frontend
*/
app.get("/api/getPredictCurrency", (req, res) => {
  async function fetchData() {
    var largeDataSet = [];
    /*
      Spawn a child process of type 'python', with arguments that containt the path to the file and the name of the item that the user wants to predict.
    */
    const python = spawn("python", [`${pathToPython}`, `${req.query.Name}`]);
    for await (const data of python.stdout) {
      // This loop listens to the python child process' console and saves it to an array.
      largeDataSet.push(data.toString());
    }
    // This is mainly used for debugging in this app
    python.on("error", (code) => {
      console.log("on error");
      console.log(code);
    });
    // This is mainly used for debugging in this app
    python.on("exit", (code) => {
      console.log("on exit");
      console.log(code);
    });

    python.on("close", async (code) => {
      console.log("entered 'on close'"); // Debug logs
      console.log(code); // Debug logs

      /*
        The largeDataSet array is iterated and split due to the way python console is listened to.
      */
      let data = [];
      for (let item of largeDataSet) {
        data.push(item.split(/[\[\]]/));
      }
      let tmpArray = [].concat(...data); // This is done due to whatever the reason is, using the 'data' array in the for loop below does not work.
      let returnArray = [];
      let counter = 1;
      /*
        Parse the array, check the items in it for numbers, and create and push a JSON object into an array
      */
      for (let item of tmpArray) {
        if (!isNaN(parseFloat(item)) && isFinite(item)) {
          let obj = { Price: parseFloat(item), Day: counter };
          counter += 1;
          returnArray.push(obj);
        }
      }

      res.send(returnArray); // Send response to frontend
    });
  }
  fetchData();
});

/*
  This api endpoint returns an array containing a history of a specific item in a specific league.
  This is specifically used for past leagues that have expired.
*/
app.get("/api/getPastCurrency", (req, res) => {
  async function fetchData() {
    // The user can choose from these 6 past leagues in the dropdown menu in frontend
    let leagueId = 47;
    if (req.query.League === "Expedition") leagueId = 47;
    else if (req.query.League === "Hardcore Expedition") leagueId = 48;
    else if (req.query.League === "Ultimatum") leagueId = 45;
    else if (req.query.League === "Hardcore Ultimatum") leagueId = 46;
    else if (req.query.League === "Ritual") leagueId = 43;
    else if (req.query.League === "Hardcore Ritual") leagueId = 44;
    /*
      Fetch the data from poe-antiquary, this api is used specifically for expired past leagues
    */
    const result = await axios
      .get(`https://poe-antiquary.xyz/api/prices/${leagueId}/9/${req.query.Id}`)
      .catch(function (error) {
        console.log(error.toJSON());
        if (error.response) {
          return res.send({});
        } else if (error.request) {
          return res.send({});
        } else {
          return res.send({});
        }
      });
    if (result.data === null) return res.send([{ History: null, Dates: null }]); // If response did not contain data for the item return
    let tmpArray = [];
    /*
      Iterate the response and push JSON objects to an array
    */
    for (let item of result.data.pricePoints) {
      let obj = {
        History: item.chaos,
        Dates: new Date(item.timestamp).toLocaleDateString("en-GB"), // The timestamp in the response is in unix time, this converts that to human readable format
      };
      tmpArray.push(obj);
    }
    res.send(tmpArray); // Return the array containing historic data to frontend
  }
  fetchData();
});

/*
  This api endpoint is used to get all of the currency item tracked by poe.ninja in the selected league, aswell as their current price.
  This data is then returned to frontend.
*/
app.get("/api/getCurrency", (req, res) => {
  async function fetchData() {
    /*
      Fetch data from poe.ninja api for the requested league
    */
    const result = await axios
      .get(
        `https://poe.ninja/api/data/CurrencyOverview?league=${req.query.League}&type=Currency`
      )
      .catch(function (error) {
        if (error.response) {
          res.send({});
        }
      });
    /*
      Iterare over data and store it in an array as a JSON object
    */
    let tmpArray = [];
    for (let item of result.data.lines) {
      for (let detail of result.data.currencyDetails) {
        if (item.currencyTypeName === detail.name) {
          let obj = {
            Name: item.currencyTypeName,
            Image: detail.icon,
            Price: item.chaosEquivalent,
            Id: detail.id,
          };
          tmpArray.push(obj);
        }
      }
    }
    res.send(tmpArray); // Return data to frontend
  }
  fetchData();
});

/*
  This api endpoint returns an array of historic data for the specified currency item in a specific league.
  This is specifically for currently active leagues.
*/
app.get("/api/getCurrencyDetails", (req, res) => {
  /*
    If the response data from poe.watch was empty, this means that the item is not tracked by poe.watch.
    If that is the case, the app simply gets the data from poe.ninja.
    This means that the date data is lost, instead a counter starting from 1 is substituted as the date.
  */
  async function errorHandling() {
    console.log(`${req.query.name} was not found in poe.watch response`); // Debug logging
    const ninjaHistory = await axios.get(
      `https://poe.ninja/api/data/CurrencyHistory?league=${req.query.League}&type=Currency&currencyId=${req.query.Id}` // Get poe.ninja historical data
    );
    let tmpArray = [];

    nlength = ninjaHistory.data.receiveCurrencyGraphData.length; // Shorten to make code more readable

    /*
      Iterate over response and save it to an array as a JSON object
    */
    for (let i = 1; i < nlength; i++) {
      let obj = {
        History: ninjaHistory.data.receiveCurrencyGraphData[i].value,
        Dates: i, // Dummy date, since poe.ninja does not track real dates
      };
      tmpArray.push(obj);
    }
    return res.send(tmpArray); // Return array containing historical data and dummy dates
  }

  /*
    Poe.watch api is used for date data, since poe.ninja does not save the real dates.
    Poe.ninja is used for the historic prices, since poe.watch historical data is incorrect, being much higher than it should be.
    This results in a need to do 3 API calls instead of 1, if real date data was not needed.
  */
  async function fetchData() {
    const result = await axios.get(
      `https://api.poe.watch/get?category=currency&league=${req.query.League}` // Get all of the currency items in requested league
    );
    // Poe.ninja and poe.watch use diffent ids for the items, resulting in a need to iterate over the response data
    for (let item of result.data) {
      if (item.name === req.query.name) {
        const watchHistory = await axios.get(
          `https://api.poe.watch/history?id=${item.id}&league=${req.query.League}` // Get the history of the item in requested league from poe.watch
        );
        const ninjaHistory = await axios.get(
          `https://poe.ninja/api/data/CurrencyHistory?league=${req.query.League}&type=Currency&currencyId=${req.query.Id}` // Get the history of the item in requested league from poe.ninja
        );
        nlength = ninjaHistory.data.receiveCurrencyGraphData.length;
        wlength = watchHistory.data.length;
        let tmpArray = [];
        let counter = 0;
        /*
          poe.ninja and poe.watch response data may differ in length, this is due to timezone differences. One may be ahead of the other by a day.         
        */
        if (wlength < nlength) {
          // If poe.ninja history is longer than poe.watch, poe.watch history is iterated over, this data is then saved as a JSON object and pushed to an array
          for (let date of watchHistory.data) {
            let [year, month, day, ...trash] = date.date.split(/[\-T]+/); // Get the day, month, and year from the date string, discard the rest.
            let obj = {
              History:
                ninjaHistory.data.receiveCurrencyGraphData[counter].value,
              Dates: `${day}.${month}.${year}`,
            };
            counter += 1;
            tmpArray.push(obj);
          }
        } else {
          /*
            If poe.watch history is longer, poe.ninja length is used.
            Since poe.ninja history is not very long (approx. 120 days), and poe.watch is much longer (approx. several hundred days),
            only the most recent date data is needed.
          */
          for (let i = 1; i < nlength; i++) {
            let [year, month, day, ...trash] =
              watchHistory.data[wlength - i].date.split(/[\-T]+/); // Starting from the end of the response array split the date string
            let obj = {
              History:
                ninjaHistory.data.receiveCurrencyGraphData[nlength - i].value, // Starting from the end of the response array, add historical data
              Dates: `${day}.${month}.${year}`,
            };
            tmpArray.push(obj);
          }
          tmpArray.reverse(); // Array is reversed so that oldest data is at the start of the array and newest data is at the end
        }
        return res.send(tmpArray); // Return the array containing historical data and dates
      }
    }
    errorHandling(); // If poe.watch response data was empty, handle it
  }
  fetchData();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// Start listening the specified port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
