import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./order-produc.css";

const OrderProduct = ({ product, orderItemsHandler }) => {
  const { name, price, shipping, img } = product;
  return (
    <div className="order-items">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <h6>Price: {price}</h6>
        <h6>Shopping charge: {shipping}</h6>
      </div>

      <div>
        <button
          onClick={() => orderItemsHandler(product)}
          className="delete-btn"
        >
          <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default OrderProduct;
