import React from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductList;