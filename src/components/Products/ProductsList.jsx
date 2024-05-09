import React, { useState, useEffect } from "react";

import apiClient from "../../../utils/api-client";

import "./ProductsList.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("products")
      .then((res) => setProducts(res.data.data.data))
      .catch((err) => setError(err.message));
  }, []);
  console.log(products);
  return (
    <section className="products_list_section">
      <header className="align_center product_list_header">
        <h2>Products</h2>
        <div className="align_center products_filter">
          <select name="sort" id="" className="products_sorting">
            <option value="" name="relevance">
              Relevance
            </option>
            <option value="price asc" name="price_low_to_hign">
              Price Low to High
            </option>
            <option value="price desc" name="price_hign_to_low">
              Price High to Low
            </option>
            <option value="rate asc" name="rate_low_to_hign">
              Rate Low to High
            </option>
            <option value="rate desc" name="rate_hign_to_low">
              Rate High to Low
            </option>
          </select>
        </div>
      </header>
      <div className="products_list">
        {error && <em className="form_error">{error.message}</em>}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.images[0]}
            title={product.title}
            price={product.price}
            stock={product.stock}
            rating="5"
            ratingCount="120"
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
