import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handlerToCart, product}=props
    const {img, price, name, ratings, seller}=product;

    return (
        <div className='product'>
            <img src={img} alt="" />
           <div>
           <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <p>Seller : {seller}</p>
            <p>Ratting : {ratings}</p>
           </div>
           
            <button onClick={()=>handlerToCart(product)} className='cart-btn'>
                <span>Add to Cart</span>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;