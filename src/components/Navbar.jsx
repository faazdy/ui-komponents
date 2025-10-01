import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navstyle.scss"

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
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
          <li>
            <Link to="/cards">Cards</Link>
          </li>
        </ul>
      </div>
      <div className="responsive-burger-menu">{/**/}
        <label className="hamburger">
          <input type="checkbox" onChange={handleOpenMenu}/>
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <ul className="burger-menu-options" style={{ display: openMenu ? 'block' : 'none' }}>
          <li>
            <Link to="/shadows">Shadows</Link>
          </li>
          <li>
            <Link to="/buttons">Buttons</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
