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
    //console.log(result);
    res.send(result.data);
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
