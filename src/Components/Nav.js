import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  // Navigation link style
  const navStyle = {
    color: "white",
  };

  /*  
    The navigation bar on the top of the web page is defined here.
    Links to home page, currency page and neural network settings page.
  */
  return (
    <nav>
      <img className="logo" src={"/final_logo_small.png"} alt="Logo"></img>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/Currency">
          <li>Currency</li>
        </Link>
        <Link style={navStyle} to="/Predictionsettings">
          <li>ML model settings</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
