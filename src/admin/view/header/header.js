import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiHome, FiLogOut, FiPackage } from "react-icons/fi";
import { Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../component/constants/constants";
import "./header.css";
import { useTranslation } from "react-i18next";

const Header = ({ menuCollapse, setMenuCollapse }) => {

  const { t } = useTranslation();

  const [routes] = useState([
    { path: ROUTES.DASHBOARD, label: t("dashboard"), icon: <FiHome /> },
    { path: ROUTES.PRODUCT_TYPE, label: t("product_type"), icon: <FiPackage /> },
    { path: ROUTES.PRODUCT, label: t("product"), icon: <FiPackage /> },
    { path: ROUTES.BRAND, label: "Brands", icon: <FaList /> },
    { path: ROUTES.CATEGORY, label: "Categories", icon: <FaList /> }
  ]);

  const location = useLocation();
  const navigate = useNavigate();

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  const handleMenuClick = (path) => {
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div id="header">
      <ProSidebar collapsed={menuCollapse} style={{ backgroundColor: '#212631' }}>
        <SidebarContent>
          <Menu iconShape="square">
            {routes.map((route, index) => (
              <MenuItem
                key={index}
                style={{ fontSize: "12px" }}
                active={isActive(route.path)}
                onClick={() => handleMenuClick(route.path)}
                icon={route.icon}
              >
                {route.label}
              </MenuItem>
            ))}
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem onClick={menuIconClick} icon={menuCollapse ? <FiChevronRight /> : <FiChevronLeft />}>
              {menuCollapse ? '' : 'Thu nhỏ'}
            </MenuItem>
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Header;
