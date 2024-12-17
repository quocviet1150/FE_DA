import React from "react";
import { Navbar } from "react-bootstrap";
import "./myStyle.css";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <Navbar
          className="topnav"
        >
          <Navbar.Brand href="">V-Canteen</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default HeaderBar;