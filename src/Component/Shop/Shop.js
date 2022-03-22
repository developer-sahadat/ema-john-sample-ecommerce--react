import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])



    const[cart, setCart]=useState([])
console.log(cart);

    const addHandlerToCart=(product)=>{
        const products=[...cart, product]
        setCart(products)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product
                         product={product}
                         key={product.id}
                         handlerToCart={addHandlerToCart}
                         >
                         </Product>)
                }
              
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;