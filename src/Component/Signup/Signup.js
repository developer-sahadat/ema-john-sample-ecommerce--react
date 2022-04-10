import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../../images/icons8-google-48.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase/init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  if (user) {
    navigate("/shop");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(email, password);
    if (error) {
      setErrorMsg(error.message);
      return;
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleCreateUser}>
          <p> Email</p>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter Email"
            onBlur={(event) => setEmail(event.target.value)}
          />
          <p>Password</p>
          <input
            required
            onBlur={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          <p>Confirm Password</p>
          <input
            required
            type="password"
            name="confirmPassword"
            placeholder="Enter Password"
            onBlur={(event) => setConfirmPassword(event.target.value)}
          />
          <br></br>
          <button className="login-btn">Sign Up</button>
        </form>
        <p style={{ color: "red", padding: "10px" }}>{errorMsg}</p>
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
  );
};

export default Signup;
