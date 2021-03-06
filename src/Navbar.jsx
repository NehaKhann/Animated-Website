import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-10 mx-auto">
          <ReactBootstrap.Navbar expand="lg">
            <NavLink className="navbar-brand " to="/">
              Khan's Creatives
            </NavLink>
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
              <ReactBootstrap.Nav className="ml-auto">
                <NavLink className="nav-link " to="/home">
                  Home
                </NavLink>
                <NavLink className="nav-link " to="/about">
                  About
                </NavLink>
                <NavLink className="nav-link " to="/contact">
                  Contact
                </NavLink>
                <NavLink className="nav-link " to="/services">
                  Services
                </NavLink>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Navbar>
          {/* <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <NavLink className="navbar-brand " to="/">
                Khan's Creatives
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link " to="/home">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to="/services">
                      Services
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
