const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const { spawn } = require("child_process");
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/getPredictCurrency", (req, res) => {
  async function fetchData() {
    let testing = 2;
    var largeDataSet = [];
    // spawn new child process to call the python script
    const python = spawn("python", [`web_pred.py`, `${testing}`]);
    // collect data from script
    python.stdout.on("data", function (data) {
      //console.log("Pipe data from python script ...");
      largeDataSet.push(data.toString());
    });
    // in close event we are sure that stream from child process is closed
    python.on("close", (code) => {
      console.log("entered 'on close'");
      //console.log(largeDataSet);
      //console.log(largeDataSet[0].length);
      let tmpArray = [];
      //console.log(largeDataSet[0][i]);
      let data = largeDataSet[0].split(/[\[\]]+/);
      tmpArray.push(...data);
      function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      let returnArray = [];
      let counter = 1;
      tmpArray.forEach((item) => {
        if (isNumeric(item)) {
          let obj = { Price: item, Day: counter };
          counter += 1;
          returnArray.push(obj);
        }
      });
      //console.log(returnArray);
      //console.log(`child process close all stdio with code ${code}`);
      // send data to browser
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
        //console.log(tmpArray);
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
