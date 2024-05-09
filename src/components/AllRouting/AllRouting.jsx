import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import ProductsPage from "../Products/ProductsPage";
import SingleProductPage from "../SingleProduct/SingleProductPage";
import CartPage from "../Cart/CartPage";
import MyOrderPage from "../MyOrder/MyOrderPage";
import LoginPage from "../Authentication/LoginPage";
import RegisterPage from "../Authentication/RegisterPage";

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product-detail/:id" element={<SingleProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<MyOrderPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRouting;
