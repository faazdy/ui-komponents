import React from "react";
import { Link } from "react-router-dom";
import "../styles/navstyle.scss"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><h1>UIK</h1></Link>
      </div>
      <div className="nav-options">
        <ul>
          <li>
            <Link to="/shadows">Shadows</Link>
          </li>
          <li>
            <Link to="/buttons">Buttons</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
