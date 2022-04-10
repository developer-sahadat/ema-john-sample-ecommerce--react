import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/init";

const Inventory = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="login-container">
      <div className="login">
        <h1>Shipping Details</h1>
        <form>
          <p>Name</p>
          <input required type="text" name="name" placeholder="Enter Name" />

          <p> Email</p>
          <input
            required
            value={user?.email}
            readOnly
            type="email"
            name="email"
            placeholder="Enter Email"
          />

          <p>Address</p>
          <input
            required
            type="text"
            name="address"
            placeholder="Enter address"
          />

          <button className="login-btn">Shipping Now</button>
        </form>
      </div>
    </div>
  );
};

export default Inventory;
