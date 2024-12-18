import React from "react";
import { Route, Routes } from "react-router-dom";
import "../i18n";
import Dashboards from "./view/dashboard/dashboard";
import Login from "./view/login/login";
import Brands from "./view/brand/brand";
import ProductTypes from "./view/productType/productType";
import Products from "./view/product/product";

const AppRouterAdmin = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="dashboard" element={<Dashboards />} />
      <Route path="brand" element={<Brands />} />
      <Route path="product-type" element={<ProductTypes />} />
      <Route path="product" element={<Products />} />
    </Routes>
  );
};

export default AppRouterAdmin;
