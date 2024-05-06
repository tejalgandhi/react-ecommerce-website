import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import LinkWithIcon from "./LinkWithIcon";

import rocket from "../../assets/rocket.png";
import star from "../../assets/star.png";
import idButton from "../../assets/id.png";
import memo from "../../assets/memo.jpeg";
import order from "../../assets/order.jpeg";
import lock from "../../assets/lock.png";

const Navbar = () => {
  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">CartWish</h1>

        <form className="align_center navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button type="submit" id="search-button" className="search_button">
            Search
          </button>
        </form>
        <div className="align_center navbar_links">
          <LinkWithIcon title="Home" link="/" emoji={rocket}></LinkWithIcon>
          <LinkWithIcon
            title="Products"
            link="/products"
            emoji={star}
          ></LinkWithIcon>
          <LinkWithIcon
            title="Login"
            link="/login"
            emoji={idButton}
          ></LinkWithIcon>
          <LinkWithIcon title="Sign Up" link="/" emoji={order}></LinkWithIcon>
          <LinkWithIcon
            title="My Orders"
            link="/order"
            emoji={memo}
          ></LinkWithIcon>
          <LinkWithIcon title="Logout" link="/" emoji={lock}></LinkWithIcon>
          <NavLink to="/cart" className="align_center">
            Cart
            <p className="align_center cart_counts">0</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
