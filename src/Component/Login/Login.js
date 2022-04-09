import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import googleIcon from "../../images/icons8-google-48.png";

const Login = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login">
          <h1>Login</h1>
          <form>
            <p> Email</p>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter Email"
            />
            <p>Password</p>
            <input
              required
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <br></br>
            <button className="login-btn">Login</button>
          </form>
          <div style={{ textAlign: "center", paddingTop: "10px" }}>
            <span>New to Ema-john?</span>
            <Link
              style={{ color: "#FF9900", textDecoration: "none" }}
              to="/signup"
            >
              Create New Account
            </Link>
          </div>
          <div className="orStyle">
            <div></div>
            <span>Or</span>
            <div></div>
          </div>

          <button className="continue-with-google-btn">
            <img src={googleIcon} alt="" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
