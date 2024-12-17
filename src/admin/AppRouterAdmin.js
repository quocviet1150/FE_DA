import React from "react";
import { Route, Routes } from "react-router-dom";
import "../i18n";
import Dashboards from "./view/dashboard/dashboard";

const AppRouterAdmin = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboards />} />
    </Routes>
  );
};

export default AppRouterAdmin;
