import React from "react";
import "./NavBar.css";
import logo from "./logo.png";
import search from "./search.png";
import Search from "../Search/Search";

function NavBar() {
  return (
    <header className="header">
      <div className="header--site">
        <img className="header--logo" src={logo} alt="micro reddit logo"></img>
        <h2 className="header--title">
          <span className="header--title--micro">micro</span>Reddit
        </h2>
      </div>
      <Search />
      <div className="header--dots">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
      </div>
    </header>
  );
}

export default NavBar;
