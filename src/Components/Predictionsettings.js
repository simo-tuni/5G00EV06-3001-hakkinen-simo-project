import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

/*
  User can train and select neural networks on this page.
*/

function Predictionsettings() {
  let [settings, setSettings] = useState([]);
  let [units, setUnits] = useState();
  let [activation, setActivation] = useState("ReLU"); // Activation function is ReLU by default, this is whats shown on the dropdown menu by default
  let [fitsettings, setFitSettings] = useState([]);
  let [epochs, setEpochs] = useState(0); // default value of 0
  let [batchsize, setBatchSize] = useState(0); // default value of 0
  let [error, setError] = useState(""); // Error message is empty by default
  let [apiresponse, setApiResponse] = useState([]);
  const [showError, setShowError] = useState(false); // Hides error message pop up by default
  const [showModel, setShowModel] = useState(false); // Hides model message pop up by default
  let [getresponse, setGetResponse] = useState([
    ...["Waiting for response..."], // Default message that is displayed when User starts training new neural network
  ]);
  let [postresponse, setPostResponse] = useState([
    [..."Waiting for response..."], // Default message that is displayed when User starts training new neural network
  ]);
  const [showResponse, setShowResponse] = useState(false); // Hides the response UI until User has started training a new neural network
  const [showButton, setShowButton] = useState(true); // Hides the start button when User has started training a new neural network

  /*
    Table rows and table data are created from settings
  */
  let listItems = settings.map((layer, id) => (
    <tr key={id}>
      <td>{id + 1}</td>
      <td>{layer.amount}</td>
      <td>{layer.function}</td>
      <td>
        <Button variant="danger" onClick={() => deleteItem(id)}>
          Delete
        </Button>
      </td>
    </tr>
  ));

  useEffect(() => {
    let x = { epochs: epochs, batchsize: batchsize }; // Save settings into one JSON object
    setFitSettings(x);
  }, [epochs, batchsize]); // This useEffect is called every time epochs or batchsize are changed

  /*
    Function that removes a row from the layer settings table when User clicks the 'Delete' button on the row.
  */
  const deleteItem = (index) => {
    setShowError(false); // Hide any error messages that might be showing
    let tmp = settings;
    for (let i = 0; i < tmp.length; i++) {
      if (i === index) {
        tmp.splice(i, 1);
        setSettings([...tmp]);
        break;
      }
    }
  };

  const clicked = () => {
    /*
      Frontend check for layer setting validity.
      Checks for units and length of layer settings.
    */
    if (
      units < 1 ||
      units > 1000 ||
      isNaN(units) ||
      Number.isInteger(units) ||
      !(units % 1 === 0)
    ) {
      setError(
        "Error, units must be an integer equal or greater than 1, and less than 1000"
      );
      setShowError(true);
      return;
    } else if (settings.length + 1 > 10) {
      setError("Error, maximum amount of layers is 10");
      setShowError(true);
      return;
    } else setShowError(false);
    let tmp = settings;
    tmp.push({ amount: units, function: activation });
    for (let i = 0; i < tmp.length; i++) {
      tmp[i].id = i;
    }
    console.log(tmp);
    setSettings([...tmp]);
  };

  // Show a error if settings are incorrect when User starts new neural network or add a layer
  const SettingsError = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Alert variant={"danger"}>{error}</Alert>
      </div>
    );
  };
  // Show a pop up when model is changed
  const SettingsModel = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Alert variant={"success"}>{apiresponse}</Alert>
      </div>
    );
  };
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowModel(false);
    }, 3000); // Model message pop up time, 3 seconds

    return () => {
      setShowModel(true); // Hide model message
      clearTimeout(timeId); // Clear the timeout loop
    };
  }, [apiresponse]); // This useEffect is made every time apiresponse is changed

  /*
    User can change selected neural network by clicking buttons on the UI, they call this function and change the path in backend.
  */
  const setBackendModel = (version) => {
    async function Orig() {
      const result = await axios.post(`/api/setModel`, {
        model: version,
      });
      console.log(result);
      setApiResponse([...result.data]);
    }
    Orig();
  };

  /*
    This function is used to get data from poe.ninja and train a new neural network with user defined settings
  */
  const createNewModel = () => {
    setShowButton(false);
    setGetResponse(...["Waiting for response..."]);
    setPostResponse(...["Waiting for response..."]);
    /*
      Frontend checks for setting validity, these are also checked in backend to prevent any invalid settings from being used to train the neural network
    */
    if (settings.length < 1 || settings.length > 10) {
      setError("Error, Layer amount must be between 1 and 10");
      setShowError(true);
      return;
    } else if (epochs < 1 || epochs > 1000) {
      setError(
        "Error, Epochs must be an integer equal or greater than 1, and less than 1000"
      );
      setShowError(true);
      return;
    } else if (batchsize < 1 || batchsize > 1000) {
      setError(
        "Error, Batch Size must be an integer equal or greater than 1, and less than 1000"
      );
      setShowError(true);
      return;
    } else setShowError(false);
    setShowResponse(true);
    async function newModel() {
      /*
        This api call gets current currency data from poe.ninja for the 'Scourge' league and stores that data for the python script
      */
      const resultFromGet = await axios.get(`/api/getCurrenctData`);
      console.log(resultFromGet);
      setGetResponse([...resultFromGet.data]); // Update UI so User can see progress updates
      /*
        This api call trains a new neural network with the given settings
      */
      const resultFromPost = await axios.post(`/api/createNewModel`, {
        fitsettings: fitsettings,
        layersettings: settings,
      });
      console.log(resultFromPost);
      setPostResponse([...resultFromPost.data]); // Update UI so User can see progress updates
      setShowButton(true);
    }
    newModel();
  };

  /*
    Table that shows status of neural network training for User
  */
  const ResponseTable = () => {
    return (
      <Table>
        <tbody>
          <tr>
            <td>Status of data gathering</td>
            <td>{getresponse}</td>
          </tr>
          <tr>
            <td>Status of Model Compiling</td>
            <td>{postresponse}</td>
          </tr>
        </tbody>
      </Table>
    );
  };

  const MLButton = () => {
    return (
      <Button variant="primary" onClick={() => createNewModel("Original")}>
        <h3>Create a new Neural Network model using the settings above</h3>
      </Button>
    );
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Epochs</th>
            <th>Batch size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{epochs}</td>
            <td>{batchsize}</td>
          </tr>
          <tr>
            <td>
              <Form.Control
                type="number"
                name="name"
                placeholder="integer"
                onChange={(event) =>
                  setEpochs(event.target.value.replace(/\D/, ""))
                }
              />
            </td>
            <td>
              <Form.Control
                type="number"
                name="name"
                placeholder="integer"
                onChange={(event) =>
                  setBatchSize(event.target.value.replace(/\D/, ""))
                }
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Units</th>
            <th>Activation function</th>
            <th>Add or Remove layer</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
          <tr>
            <td></td>
            <td>
              <Form.Control
                type="number"
                name="name"
                placeholder="integer"
                onChange={(event) => setUnits(event.target.value)}
              />
            </td>
            <td>
              <DropdownButton id="dropdown-basic-button" title={activation}>
                <Dropdown.Item
                  onClick={(event) => setActivation(event.target.textContent)}
                >
                  ReLU
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(event) => setActivation(event.target.textContent)}
                >
                  Sigmoid
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(event) => setActivation(event.target.textContent)}
                >
                  Tanh
                </Dropdown.Item>
              </DropdownButton>
            </td>

            <td>
              <Button variant="primary" onClick={() => clicked()}>
                Add layer
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {showError ? <SettingsError /> : null}

      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <Button onClick={() => setBackendModel("Original")}>
                Load Original Model
              </Button>
            </td>
            <td>
              <Button onClick={() => setBackendModel("User")}>
                Load User Model
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {showModel ? <SettingsModel /> : null}

      {showButton ? <MLButton /> : null}
      {showResponse ? <ResponseTable /> : null}
    </Container>
  );
}
export default Predictionsettings;
