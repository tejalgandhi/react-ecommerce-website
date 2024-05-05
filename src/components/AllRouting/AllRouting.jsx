import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import ProductsPage from "../Products/ProductsPage";
import SingleProductPage from "../SingleProduct/SingleProductPage";

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product-detail" element={<SingleProductPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRouting;
