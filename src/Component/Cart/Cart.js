import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";

const Cart = ({ cart, children }) => {
  console.log(children);

  let totalPrice = 0;
  let shippingPrice = 0;
  let quantity = 0;
  for (const carts of cart) {
    quantity += carts.quantity;
    totalPrice += carts.price * quantity;
    shippingPrice += carts.shipping * quantity;
  }

  const tax = (totalPrice * 0.1).toFixed(4);
  const grandPrice = totalPrice + shippingPrice + parseFloat(tax);

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${shippingPrice}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandPrice}</h4>

      <button className="clearBtn">
        Clear Cart{" "}
        <FontAwesomeIcon
          style={{ padding: "0 5px" }}
          icon={faTrashAlt}
        ></FontAwesomeIcon>{" "}
      </button>
      {children}
    </div>
  );
};

export default Cart;
