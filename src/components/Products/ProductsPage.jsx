import React from "react";
import "./ProductsPage.css";
import ProductsSidebar from "./ProductsSidebar";

const ProductsPage = () => {
  return (
    <section className="products_page">
      <ProductsSidebar />
      <section className="products_list_section">product list</section>
    </section>
  );
};

export default ProductsPage;
