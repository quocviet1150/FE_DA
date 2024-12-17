import React from "react";
import { Route, Routes } from "react-router-dom";
import "../i18n";
import Dashboards from "./view/dashboard/dashboard";
import Login from "./view/login/login";
import Brands from "./view/brand/brand";

const AppRouterAdmin = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="dashboard" element={<Dashboards />} />
      <Route path="brand" element={<Brands />} />
    </Routes>
  );
};

export default AppRouterAdmin;
