import React from "react";
import "./FeatureProducts.css";
import ProductCard from "./ProductCard";

const FeatureProduct = () => {
  return (
    <section className="featured_products">
      <h2>Feature Products</h2>
      <div className="align_center featured_products_list">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </section>
  );
};

export default FeatureProduct;
