import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../component/account/login/login";
import "../i18n";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
