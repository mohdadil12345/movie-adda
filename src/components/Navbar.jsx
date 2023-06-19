import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.svg";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Series</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Original</Link>
          </li>
        </ul>
      </div>
      <div className="searcbar">
        <button>Search</button>
        <p>My List</p>
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
