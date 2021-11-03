const axios = require("axios");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/getCurrency", (req, res) => {
  async function fetchData() {
    const result = await axios.get(
      `https://poe.ninja/api/data/CurrencyOverview?league=Scourge&type=Currency`
    );
    let tmpArray = [];
    for (let item of result.data.lines) {
      for (let detail of result.data.currencyDetails) {
        if (item.currencyTypeName === detail.name) {
          let obj = {
            Name: item.currencyTypeName,
            Image: detail.icon,
            Price: item.chaosEquivalent,
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
      `https://api.poe.watch/get?category=currency&league=Scourge`
    );
    for (let item of result.data) {
      if (item.name === req.query.name) {
        const history = await axios.get(
          `https://api.poe.watch/history?id=${item.id}&league=Scourge`
        );
        res.send(history.data);
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
