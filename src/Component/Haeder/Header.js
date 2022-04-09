import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <div>
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/shop">
            Shop
          </NavLink>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="link" to="/blog">
            Blog
          </NavLink>
          <NavLink className="link" to="/order">
            Order
          </NavLink>
          <NavLink className="link" to="/Login">
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
