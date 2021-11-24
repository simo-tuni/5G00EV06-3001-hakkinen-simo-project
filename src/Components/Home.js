import React from "react";

/*
  Home page, lists information about the game and the resources used for this application.
*/
function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Home Page for the application</h1>
      </div>
      <br />
      <br />
      <div
        style={{
          float: "left",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "justify",
        }}
      >
        <h3>
          This application allows the User to view currency data for the ARPG{" "}
          <a href={"https://www.pathofexile.com/"}>Path of Exile</a>. Players in
          Path of Exile (or poe for short) can trade with each other, however
          there does not exist a money equivalent in the game, such as gold or
          coins. This is why certain items with varying uses are used by players
          as a pseudo money equivalent to facilitate easier trading between
          players.
        </h3>
      </div>
      <div
        style={{
          float: "right",
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "justify",
        }}
      >
        <h3>Links to used resources</h3>
      </div>

      <h3>
        <a href={"https://poe.ninja/"}>Poe.ninja</a>, used to get data for
        currently active leagues
      </h3>
      <h3>
        <a href={"https://poe.watch/"}>Poe.watch</a>, used to get date data for
        historical data
      </h3>
      <h3>
        <a href={"https://poe-antiquary.xyz/"}>Poe-antiquary</a>, used to get
        data for expired leagues
      </h3>
    </>
  );
}

export default Home;
