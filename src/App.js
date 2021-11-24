import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Currency from "./Components/Currency";
import CurrencyDetail from "./Components/CurrencyDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Predictionsettings from "./Components/Predictionsettings";

/*
  The app uses react router to route to different pages.
  Route paths must be exact for Home and Currency, since they would be loaded when trying to go to other pages otherwise.
*/

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/currency" exact component={Currency} />
          <Route path="/currency/:id" component={CurrencyDetail} />
          <Route path="/predictionsettings" component={Predictionsettings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
