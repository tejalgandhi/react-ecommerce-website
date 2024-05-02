import React from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <div className="navbar_list_left">
            <h2>CartWish</h2>

            <form className="search-container">
              <input
                type="text"
                id="search-input"
                placeholder="Search Products"
              />
              <button type="submit" id="search-button">
                Search
              </button>
            </form>
          </div>
          <ul className="navbar_list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Products</NavLink>
            </li>
            <li>
              <NavLink to="/">Login</NavLink>
            </li>
            <li>
              <NavLink to="/">Signup</NavLink>
            </li>
            <li>
              <NavLink to="/">My Orders</NavLink>
            </li>
            <li>
              <NavLink to="/">Logout</NavLink>
            </li>
            <li>
              <NavLink to="/">Cart</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
