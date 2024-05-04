import React from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">CartWish</h1>

        <form className="align_center navbar_form">
          <input
            type="text"
            id="search-input"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button type="submit" id="search-button" className="search_button">
            Search
          </button>
        </form>
        {/* <ul className="navbar_list">
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
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
