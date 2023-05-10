import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1>
        <NavLink to="/" exact>
          Portfolio
        </NavLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/post">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
