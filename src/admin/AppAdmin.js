import React, { useEffect, useState } from "react";
import "../i18n";
import AppRouterAdmin from "./AppRouterAdmin";
import Header from "./view/header/header";
import HeaderBar from "./view/header/headerBar";
import Login from "./view/login/login";

const AppAdmin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuCollapse, setMenuCollapse] = useState(false);

    useEffect(() => {
        const token = "test";
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    if (!isLoggedIn) {
        return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
    }

    return (
        <>
            {isLoggedIn && (<div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
                <HeaderBar menuCollapse={menuCollapse} />
                <Header menuCollapse={menuCollapse} setMenuCollapse={setMenuCollapse} />
                <div
                    style={{
                        flexGrow: 1,
                        marginLeft: menuCollapse ? "80px" : "12%",
                        transition: "margin-left 0.3s ease",
                    }}
                >
                    <AppRouterAdmin />
                </div>
            </div>)}
        </>
    );
};

export default AppAdmin;
