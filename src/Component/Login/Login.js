import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import googleIcon from "../../images/icons8-google-48.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase/init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (error) {
    setErrorMsg(error.message);
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleSignInUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div className="login-container">
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={handleSignInUser}>
            <p> Email</p>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter Email"
              onBlur={(e) => setEmail(e.target.value)}
            />
            <p>Password</p>
            <input
              required
              type="password"
              name="password"
              placeholder="Enter Password"
              onBlur={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <p style={{ color: "red", padding: "10px" }}>{errorMsg}</p>
            <p>{loading && "Loading..."}</p>
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
