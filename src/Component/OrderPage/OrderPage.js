import React from "react";
import { Link } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../Hook/useCart/useCart";
import useProduct from "../Hook/UseProducts/UseProduct";
import OrderProduct from "../orderProduct/OrderProduct";

const OrderPage = () => {
  const [product] = useProduct();

  const [cart, setCart] = useCart(product);

  const orderItemsHandler = (products) => {
    const orderItemsRemove = cart.filter((pd) => pd.id !== products.id);
    setCart(orderItemsRemove);
    removeFromDb(products.id);
  };

  return (
    <div>
      <div className="shop-container">
        <div className="order-container">
          {cart.map((product) => (
            <OrderProduct
              orderItemsHandler={orderItemsHandler}
              product={product}
              key={product.id}
            ></OrderProduct>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/inventory">
              <button>Proceed Checkout</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
