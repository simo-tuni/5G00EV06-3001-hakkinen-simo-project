const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const { spawn } = require("child_process");
const port = process.env.PORT || 3000;
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
let pathToPython = "./ML/Original/";
app.use(express.static("public"));
app.use(express.json());

app.post("/api/setModel", (req, res) => {
  console.log(req.body);
  pathToPython = `./ML/${req.body.model}/web_pred.py`;
  console.log(pathToPython);
  res.send(`Changed model to ${req.body.model}`);
});

app.get("/api/getCurrenctData", (req, res) => {
  async function fetchData() {
    const result = await axios
      .get(
        `https://poe.ninja/api/data/CurrencyOverview?league=Scourge&type=Currency`
      )
      .catch(function (error) {
        if (error.response) {
          res.send({});
        }
      });
    let nameArray = [];
    let idArray = [];
    for (let item of result.data.lines) {
      for (let detail of result.data.currencyDetails) {
        if (item.currencyTypeName === detail.name) {
          nameArray.push(item.currencyTypeName);
          idArray.push(detail.id);
        }
      }
    }
    let data = [];
    for (let i = 0; i < nameArray.length; i++) {
      const ninjaHistory = await axios.get(
        `https://poe.ninja/api/data/CurrencyHistory?league=Scourge&type=Currency&currencyId=${idArray[i]}`
      );
      for (
        let a = 0;
        a < ninjaHistory.data.receiveCurrencyGraphData.length;
        a++
      ) {
        let obj = {
          Name: nameArray[i],
          Price: ninjaHistory.data.receiveCurrencyGraphData[a].value,
          Day: a + 1,
          League: "Scourge",
        };
        data.push(obj);
      }
    }

    const csvWriter = createCsvWriter({
      path: "./ML/User/out.csv",
      header: [
        { id: "Name", title: "Name" },
        { id: "Price", title: "Price" },
        { id: "Day", title: "Day" },
        { id: "League", title: "League" },
      ],
    });

    csvWriter
      .writeRecords(data)
      .then(() => console.log("The CSV file was written successfully"));

    res.send(`Finished getting data!`);
  }
  fetchData();
});

app.post("/api/createNewModel", (req, res) => {
  //console.log(req.body);
  let epochs = req.body.fitsettings.epochs;
  let batchsize = req.body.fitsettings.batchsize;
  let layersettings = req.body.layersettings;
  //console.log(epochs);
  //console.log(batchsize);
  //console.log(layersettings);
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
  res.send(`User created model is now ready to be loaded!`);
  /*
  
  */
});

app.get("/api/getPredictCurrency", (req, res) => {
  async function fetchData() {
    var largeDataSet = [];
    // spawn new child process to call the python script
    const python = spawn("python", [`${pathToPython}`, `${req.query.Name}`]);
    // collect data from script
    for await (const data of python.stdout) {
      //console.log(data.toString());
      largeDataSet.push(data.toString());
    }
    /*
    python.stdout.on("data", function (data) {
      //console.log("Pipe data from python script ...");
      largeDataSet.push(data.toString());
    });
    */
    python.on("error", (code) => {
      console.log("on error");
      console.log(code);
    });
    python.on("exit", (code) => {
      console.log("on exit");
      console.log(code);
    });
    // in close event we are sure that stream from child process is closed

    async function arrayMutation(dataset) {
      //console.log("dataset:");
      //console.log(dataset);
      //console.log(largeDataSet);
      //console.log(largeDataSet[0].length);
      let data = [];
      for (let item of dataset) {
        data.push(item.split(/[\[\]]/));
      }
      let tmpArray = [].concat(...data);
      //console.log("tmpArray:");
      //console.log(tmpArray);
      let returnArray = [];
      let counter = 1;
      for (let item of tmpArray) {
        if (!isNaN(parseFloat(item)) && isFinite(item)) {
          let obj = { Price: parseFloat(item), Day: counter };
          counter += 1;
          returnArray.push(obj);
        }
      }

      //console.log(returnArray);
      //console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      //console.log("returnArray:");
      //console.log(returnArray);
      return returnArray;
    }

    python.on("close", async (code) => {
      console.log("entered 'on close'");
      console.log(code);

      let returnArray = await arrayMutation(largeDataSet);

      res.send(returnArray);
    });
  }
  fetchData();
});

app.get("/api/getPastCurrency", (req, res) => {
  async function fetchData() {
    let leagueId = 47;
    if (req.query.League === "Expedition") leagueId = 47;
    else if (req.query.League === "Hardcore Expedition") leagueId = 48;
    else if (req.query.League === "Ultimatum") leagueId = 45;
    else if (req.query.League === "Hardcore Ultimatum") leagueId = 46;
    else if (req.query.League === "Ritual") leagueId = 43;
    else if (req.query.League === "Hardcore Ritual") leagueId = 44;
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
    if (result.data === null) return res.send([{ History: null, Dates: null }]);
    let tmpArray = [];
    for (let item of result.data.pricePoints) {
      let obj = {
        History: item.chaos,
        Dates: new Date(item.timestamp).toLocaleDateString("en-GB"),
      };
      tmpArray.push(obj);
    }
    res.send(tmpArray);
  }
  fetchData();
});

app.get("/api/getCurrency", (req, res) => {
  async function fetchData() {
    const result = await axios
      .get(
        `https://poe.ninja/api/data/CurrencyOverview?league=${req.query.League}&type=Currency`
      )
      .catch(function (error) {
        if (error.response) {
          res.send({});
        }
      });

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
    res.send(tmpArray);
  }
  fetchData();
});

app.get("/api/getCurrencyDetails", (req, res) => {
  async function fetchData() {
    const result = await axios.get(
      `https://api.poe.watch/get?category=currency&league=${req.query.League}`
    );
    for (let item of result.data) {
      if (item.name === req.query.name) {
        const watchHistory = await axios.get(
          `https://api.poe.watch/history?id=${item.id}&league=${req.query.League}`
        );
        const ninjaHistory = await axios.get(
          `https://poe.ninja/api/data/CurrencyHistory?league=${req.query.League}&type=Currency&currencyId=${req.query.Id}`
        );
        nlength = ninjaHistory.data.receiveCurrencyGraphData.length;
        wlength = watchHistory.data.length;
        let tmpArray = [];
        let counter = 0;
        //console.log("wlength: " + wlength + " " + "nlength: " + nlength);
        if (wlength < nlength) {
          for (let date of watchHistory.data) {
            let [year, month, day, ...trash] = date.date.split(/[\-T]+/);
            let obj = {
              History:
                ninjaHistory.data.receiveCurrencyGraphData[counter].value,
              Dates: `${day}.${month}.${year}`,
            };
            counter += 1;
            tmpArray.push(obj);
          }
        } else {
          for (let i = 1; i < nlength; i++) {
            //console.log(watchHistory.data[wlength - i]);
            let [year, month, day, ...trash] =
              watchHistory.data[wlength - i].date.split(/[\-T]+/);
            let obj = {
              History:
                ninjaHistory.data.receiveCurrencyGraphData[nlength - i].value,
              Dates: `${day}.${month}.${year}`,
            };
            tmpArray.push(obj);
          }
          tmpArray.reverse();
        }
        res.send(tmpArray);
      }
    }
  }
  fetchData();
});

app.get("/api/getPicture", (req, res) => {
  async function fetchData() {
    console.log(req);
    //const result = await axios.get(
    //  `https://poe.ninja/api/data/CurrencyOverview?league=Scourge&type=Currency`
    //);
    //res.send(result.data.lines);
  }
  fetchData();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
