import React from "react";
import "./HeroSection.css";
import Iphone from "../assets/iphone-15.jpg";

const HeroSection = () => {
  return (
    <section className="hero_section">
      <div className="align_center">
        <h2 className="hero_title">Buy Iphone 15</h2>
        <p className="hero_subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eum?
          Eveniet est exercitationem animi assumenda velit, dolores eligendi
          corporis aspernatur qui ad soluta veniam? Minima veritatis officiis
          quam. Hic, nisi?
        </p>
        <img src={Iphone} className="hero_image"></img>
        <a href="" className="hero_link">
          Buy Now
        </a>
      </div>
      <div className="align_center"></div>
    </section>
  );
};

export default HeroSection;
