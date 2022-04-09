import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../images/icons8-google-48.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }
  };

  return (
    <div>
      <div>
        <div className="login-container">
          <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleCreateUser}>
              <label for="email">
                <p> Email</p>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onBlur={(event) => setEmail(event.target.value)}
                />
              </label>
              <label for="password">
                <p>Password</p>
                <input
                  required
                  onBlur={(event) => setPassword(event.target.value)}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </label>
              <label for="password">
                <p>Confirm Password</p>
                <input
                  required
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Password"
                  onBlur={(event) => setConfirmPassword(event.target.value)}
                />
              </label>
              <br></br>
              <button className="login-btn">Login</button>
            </form>
            <p style={{ color: "red" }}>{errorMsg}</p>
            <div style={{ textAlign: "center", paddingTop: "10px" }}>
              <span>Already have an account?</span>
              <Link
                style={{ color: "#FF9900", textDecoration: "none" }}
                to="/login"
              >
                Login
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
    </div>
  );
};

export default Signup;
