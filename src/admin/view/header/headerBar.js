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
          <div className="d-flex w-100">
            <div style={{ width: '12%', paddingTop: '10px', paddingBottom: '10px' }}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{ height: "40px" }} alt="ups" />
            </div>
            <div style={{ width: '90%' , paddingTop: '10px', paddingBottom: '10px' }}>
              <div className="d-flex justify-content-end">
                test
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default HeaderBar;