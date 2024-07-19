import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHandHoldingMedical } from "react-icons/fa";
import "../../Styles/header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-white " data-bs-theme="">
      <div className="container-fluid">
        <div className="navbar-logo">
          <NavLink className="navbar-brand logo fw-bold fs-1" to="/">
            <FaHandHoldingMedical size={50} />
            AI-DOC
          </NavLink>
        </div>

        <button
          className="navbar-toggle navbar-toggler"

          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
            <li className="nav-item">
              <Link className="nav-link" to="#about" smooth={true} duration={500} >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link mt-2 " to="/login">
                Login{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                <button className="">Sign Up</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
