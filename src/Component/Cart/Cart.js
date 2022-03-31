import React from 'react';
import './Cart.css'

const Cart = ({cart,children}) => {
    console.log(children);

    let totalPrice=0;
    let shippingPrice=0;
    let quantity=0;
    for(const carts of cart){
        quantity+=carts.quantity
        totalPrice+=carts.price*quantity
        shippingPrice+=carts.shipping*quantity
    }

    const tax=(totalPrice*0.10).toFixed(4)
    const grandPrice=totalPrice+shippingPrice+parseFloat(tax)

    return (
        <div className='cart'>
               <h2>Order Summary</h2>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingPrice}</p>
                <p>Tax:  ${tax}</p>
                <h4>Grand Total: ${grandPrice}</h4>

                <button>Clear Cart</button>
               {children}
        </div>
    );
};

export default Cart;