import React from "react";
import "./NavBar.css";
import logo from "./logo.png";

function NavBar() {
  return (
    <header className="header">
      <img className="header--logo" src={logo} alt="micro reddit logo"></img>
      <h1 className="header--title">
        <span className="header--title--micro">micro</span>Reddit
      </h1>
    </header>
  );
}

export default NavBar;
