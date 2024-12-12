import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "../component/account/forgot-password/forgotPassword";
import Login from "../component/account/login/login";
import "../i18n";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
