import React from "react";
import { NavLink } from "react-router-dom";
import "./LinkWithIcon.css";

const LinkWithIcon = ({ title, link, emoji }) => {
  return (
    <NavLink to={link}>
      {title}
      <img src={emoji} className="link_emoji"></img>
    </NavLink>
  );
};

export default LinkWithIcon;
