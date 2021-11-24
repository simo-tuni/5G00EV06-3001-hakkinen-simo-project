import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

/*
  This page is for displaying price data for all of the currency items in the selected league
*/

// Theme for the table
const THEME = {
  HeaderRow: `  
    font-weight: bold;
    font-size: 24px;
 
    background-color: #eaf5fd;
  `,
  Row: `
    font-size: 16px;
    
    &:hover {
      color: #212529;
      cursor: default;
    }
  `,
};

function Currency() {
  let [curritem, setCurritem] = useState([]);
  let [league, setLeague] = useState("Scourge"); // Default league that data is displayed for.
  const [search, setSearch] = useState(""); // Search field is empty by default
  const theme = useTheme(THEME); //load theme

  useEffect(() => {
    async function fetchData() {
      /*
         API call to backend. This returns an array of all the currency items in the selected league that poe.ninja tracks
      */
      const result = await axios.get(`/api/getCurrency?League=${league}`);
      setCurritem([...result.data]); // Result data is set as the item, this forces UI update
    }
    fetchData();
  }, [league]); // This useEffect is made every time league is changed

  // Filter curritem to display only the items that have the same letter combination as what is input in the search field, not case sensitive.
  const data = {
    nodes: curritem.filter((item) =>
      item.Name.toLowerCase().includes(search.toLowerCase())
    ),
  };
  return (
    <>
      <div>Select ongoing League</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DropdownButton id="dropdown-basic-button" title={league}>
          <Dropdown.Item
            onClick={(e) => {
              setLeague(e.target.textContent);
            }}
          >
            Scourge
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => {
              setLeague(e.target.textContent);
            }}
          >
            Hardcore Scourge
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => {
              setLeague(e.target.textContent);
            }}
          >
            Standard
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => {
              setLeague(e.target.textContent);
            }}
          >
            Hardcore
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="search">
          Search by Name: <br></br>
          <input
            id="search"
            type="text"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </label>
      </div>
      <>
        <Table data={data} theme={theme} layout={{ custom: true }}>
          {(tableList) => (
            <>
              <Header>
                <HeaderRow>
                  <HeaderCell style={{ width: "100px" }}>Item</HeaderCell>
                  <HeaderCell style={{ width: "100px" }}>Price</HeaderCell>
                </HeaderRow>
              </Header>
              <Body>
                {tableList.map((cur, id) => (
                  <Row key={id} item={cur} style={{ width: "200px" }}>
                    <Cell style={{ width: "100px" }}>
                      {
                        <img
                          src={cur.Image}
                          alt={"Picture of " + cur.Name}
                        ></img>
                      }{" "}
                      <Link
                        to={{
                          pathname: `/Currency/${cur.Name}`,
                          state: {
                            CurName: cur.Name,
                            Id: cur.Id,
                            League: league,
                          },
                        }}
                      >
                        {cur.Name}
                      </Link>
                    </Cell>
                    <Cell style={{ width: "100px" }}>{cur.Price}</Cell>
                  </Row>
                ))}
              </Body>
            </>
          )}
        </Table>
      </>
    </>
  );
}

export default Currency;
