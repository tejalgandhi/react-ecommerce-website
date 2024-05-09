import React from "react";
import "./ProductCard.css";
import { Link, NavLink } from "react-router-dom";

import Basket from "../../assets/cart.png";
import star from "../../assets/star.png";

const ProductCard = ({
  id,
  image,
  title,
  description,
  price,
  stock,
  rating,
  ratingCount,
}) => {
  console.log(image);

  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/product-detail/${id}`}>
          <img src={image} alt="product-image" />
        </NavLink>
      </div>
      <div className="product_details">
        <h3 className="product_price">${price}</h3>
        <p className="product_title">{title}</p>
        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={star}></img>
              {rating}
            </p>
            <p className="product_review_count">{ratingCount}</p>
          </div>
          {stock > 0 && (
            <p className="add_to_cart">
              <img src={Basket}></img>
            </p>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
