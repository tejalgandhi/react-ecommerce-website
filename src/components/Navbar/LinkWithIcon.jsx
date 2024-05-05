import React from "react";
import { NavLink } from "react-router-dom";
import "./LinkWithIcon.css";

const LinkWithIcon = ({ title, link, emoji, sidebar }) => {
  return (
    <NavLink
      to={link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title}
      <img src={emoji} className="link_emoji"></img>
    </NavLink>
  );
};

export default LinkWithIcon;
