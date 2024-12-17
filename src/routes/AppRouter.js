import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ForgotPassword from "../component/account/forgot-password/forgotPassword";
import Login from "../component/account/login/Login";
import "../i18n";
import Register from "../component/account/register/register";
import Home from "../pages/user/home/home";
import AppAdmin from "../admin/AppAdmin";

const AppRouter = () => {
  return (
    <Router>
      <Routes path="/">
        <Route path="" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="reset" element={<ForgotPassword />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="admin/*" element={<AppAdmin />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
