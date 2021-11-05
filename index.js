const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/getCurrency", (req, res) => {
  async function fetchData() {
    const result = await axios.get(
      `https://poe.ninja/api/data/CurrencyOverview?league=${req.query.League}&type=Currency`
    );
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
