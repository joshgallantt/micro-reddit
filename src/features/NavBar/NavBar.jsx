import React from "react";
import "./NavBar.css";
import logo from "./logo.png";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header--site">
          <img
            className="header--logo"
            src={logo}
            alt="micro reddit logo"
          ></img>

          <h2 className="header--title">
            <span className="header--title--micro">micro</span>Reddit
          </h2>
        </div>
      </Link>
      <Search />
      <div className="header--dots">
        <a href="https://github.com/joshgallantt/micro-reddit">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </a>
      </div>
    </header>
  );
}

export default NavBar;
