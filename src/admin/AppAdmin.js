import React from "react";
import "../i18n";
import AppRouterAdmin from "./AppRouterAdmin";
import Header from "./view/header/header";
import HeaderBar from "./view/header/headerBar";

const AppAdmin = () => {
    return (
        <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
            <HeaderBar />
            <Header />
            <AppRouterAdmin />
        </div>
    );
};

export default AppAdmin;
