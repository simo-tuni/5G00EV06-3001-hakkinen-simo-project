import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useLocation } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/button";

/*
  This page is for displaying detailed price data for the selected currency item
*/
function CurrencyDetail({ match }) {
  const location = useLocation(); // location is used so that additional parameters can be passed down to this component from 'Currency'
  let [item, setItem] = useState([]);
  let [predicteditem, setPredictedItem] = useState([]);
  let [league, setLeague] = useState([location.state.League]); // The league the data is shown for depends on the selected league on the 'Currency' page
  let [pastleague, setPastLeague] = useState("Expedition"); // Default past league on the dropdown menu is set to 'Expedition'
  const [showPrediction, setShowPrediction] = useState(false);
  let [itemlink, setItemLink] = useState("");

  /*
    This function gets price data predicted by the selected neural network for the selected currency item in the 'Scourge' league.
  */
  async function fetchPredictedPrice() {
    const result = await axios.get(
      `/api/getPredictCurrency?Name=${location.state.CurName}` // Returns an array of price data for the whole league (90 days, so an array of length 90)
    );
    setPredictedItem([...result.data]);
  }
  /*
    This function is used for fetching currency data from expired leagues
  */
  async function fetchOldData(oldLeague) {
    setPastLeague(oldLeague);
    setShowPrediction(false);
    const result = await axios.get(
      `/api/getPastCurrency?League=${oldLeague}&Id=${location.state.Id}` // League and item id is sent to backend
    );
    setItem([...result.data]);
  }

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `/api/getCurrencyDetails?League=${league}&name=${match.params.id}&Id=${location.state.Id}`
      );
      setItem([...result.data]);
    }
    fetchData();
    /*
      If selected league is not 'Scourge' the prediction graph is not shown, since the neural network is only trained in data
      from softcore temporary leagues it can only be used to predict the currently active softcore league.
    */
    if (league[0] === "Scourge") {
      setShowPrediction(true);
    } else setShowPrediction(false);
    // Replace all spaces to underscores in item name to so it can be used in wiki link
    let link = match.params.id.replace(/ /g, "_", function (x) {
      return x;
    });
    setItemLink(`https://www.poewiki.net/wiki/${link}`); // Link to the currency items wiki page
  }, [league, location, match.params.id]);

  /*
    Custom tooltip for the graph, this allows the User to hover over the graph and see the day and the price of the item on that day
    on a tooltip.
  */
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Day: ${label}`}</p>
          <p className="price">{`Price: ${payload[0].value} Chaos`}</p>
        </div>
      );
    }

    return null;
  };

  /*
    Price prediction graph that is only shown when 'Scourge' league is selected.
    The graph has the item price on the Y-axis and the day of the league (1 - 90) on the X-axis.
    User can hover over the graph to see a tooltip containing the day and price of the item on the day the cursor is hovered over.
  */
  const League = () => (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Predicted price</h2>
      </div>
      <Button variant="info" onClick={() => fetchPredictedPrice()}>
        Show predicted price
      </Button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LineChart
          width={1200}
          height={600}
          data={predicteditem}
          margin={{ top: 5, right: 20, bottom: 30, left: 40 }}
        >
          <Line type="monotone" dataKey="Price" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            dataKey="Day"
            label={{
              value: "Days since League start",
              dy: 20,
            }}
          />
          <YAxis
            label={{
              value: "Price in Chaos",
              position: "left",
              angle: -90,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </div>
    </>
  );

  return (
    <>
      <h3>
        Detailed overview for <a href={itemlink}>{match.params.id}</a>
      </h3>
      <div>Select ongoing League</div>
      <DropdownButton id="dropdown-basic-button" title={league}>
        <Dropdown.Item
          onClick={(e) => {
            setLeague([...[e.target.textContent]]);
          }}
        >
          Scourge
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            setLeague([...[e.target.textContent]]);
          }}
        >
          Hardcore Scourge
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            setLeague([...[e.target.textContent]]);
          }}
        >
          Standard
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            setLeague([...[e.target.textContent]]);
          }}
        >
          Hardcore
        </Dropdown.Item>
      </DropdownButton>
      <div>Browse past League data</div>
      <DropdownButton id="dropdown-basic-button" title={pastleague}>
        <Dropdown.Item
          onClick={(e) => {
            fetchOldData(e.target.textContent);
          }}
        >
          Expedition
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            fetchOldData(e.target.textContent);
          }}
        >
          Hardcore Expedition
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            fetchOldData(e.target.textContent);
          }}
        >
          Ultimatum
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            fetchOldData(e.target.textContent);
          }}
        >
          Hardcore Ultimatum
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            fetchOldData(e.target.textContent);
          }}
        >
          Ritual
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            fetchOldData(e.target.textContent);
          }}
        >
          Hardcore Ritual
        </Dropdown.Item>
      </DropdownButton>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Real price</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LineChart
          width={1200}
          height={600}
          data={item}
          margin={{ top: 5, right: 20, bottom: 30, left: 40 }}
        >
          <Line type="monotone" dataKey="History" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            dataKey="Dates"
            label={{
              value: "Date",
              dy: 20,
            }}
          />
          <YAxis
            label={{
              value: "Price in Chaos",
              position: "left",
              angle: -90,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </div>
      {showPrediction ? <League /> : null}
    </>
  );
}

export default CurrencyDetail;
