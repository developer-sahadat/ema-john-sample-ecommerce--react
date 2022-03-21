import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
    const {img, price, name, ratings, seller}=props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
           <div>
           <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <p>Seller : {seller}</p>
            <p>Ratting : {ratings}</p>
           </div>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;