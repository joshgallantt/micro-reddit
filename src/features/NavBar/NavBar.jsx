import React from "react";
import "./NavBar.css";
import logo from "./logo.png";
import search from "./search.png";

function NavBar() {
  return (
    <header className="header">
      <div className="header--site">
        <img className="header--logo" src={logo} alt="micro reddit logo"></img>
        <h2 className="header--title">
          <span className="header--title--micro">micro</span>Reddit
        </h2>
      </div>
      <div className="header--searchbox">
        <input type="text" placeholder="search subreddits"></input>
        <img
          className="header--search--icon"
          src={search}
          alt="search icon"
        ></img>
      </div>
      <div className="header--dots">...</div>
    </header>
  );
}

export default NavBar;
