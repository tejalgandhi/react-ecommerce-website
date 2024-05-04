import React from "react";
import "./ProductCard.css";

import Iphone from "../assets/iphone13.jpeg";
import Basket from "../assets/basket.jpeg";
import star from "../assets/star.png";

const ProductCard = ({ id, title, subtitle, price }) => {
  return (
    <article className="product_card">
      <div className="product_image">
        <a href="">
          <img src={Iphone} alt="product-image" />
        </a>
      </div>
      <div className="product_details">
        <h3 className="product_price">$19.99</h3>
        <p className="product_title">Tailored Jeans</p>
        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={star}></img>5.0
            </p>
            <p className="product_review_count">120</p>
          </div>
          <p>
            <button>
              <img src={Basket}></img>
              Add to Cart
            </button>
          </p>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
