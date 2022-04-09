import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";
import auth from "../../firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

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
          {user ? (
            <button className="longOut" onClick={() => signOut(auth)}>
              Long Out
            </button>
          ) : (
            <NavLink className="link" to="/Login">
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
