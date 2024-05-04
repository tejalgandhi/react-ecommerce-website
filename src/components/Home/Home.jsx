import React from "react";
import HeroSection from "./HeroSection";
import Iphone from "../../assets/iphone15.jpeg";
import Iphone14 from "../../assets/iphone14.jpeg";
import FeatureProducts from "./FeatureProducts";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <HeroSection
        title="Buy Iphone 15"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eum?
      Eveniet est exercitationem animi assumenda velit, dolores eligendi
      corporis aspernatur qui ad soluta veniam? Minima veritatis officiis
      quam. Hic, nisi?"
        image={Iphone}
      ></HeroSection>
      <FeatureProducts></FeatureProducts>
      {/* feature products */}

      <HeroSection
        title="Build the ultimate setup"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eum?
      Eveniet est exercitationem animi assumenda velit, dolores eligendi
      corporis aspernatur qui ad soluta veniam? Minima veritatis officiis
      quam. Hic, nisi?"
        image={Iphone14}
      ></HeroSection>
    </div>
  );
};

export default Home;
