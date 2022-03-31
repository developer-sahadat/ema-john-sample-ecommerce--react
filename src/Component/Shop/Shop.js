import React, { useEffect, useState } from 'react';
import { addedProducts, addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import useProduct from '../Hook/UseProducts/UseProduct';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products]=useProduct()

    useEffect(()=>{
        const localStores=addedProducts();
        
        const saveProducts=[]

        for(const id in localStores){
          const productsCart= products.find(product=>product.id===id);
          if(productsCart){
            const quantity=localStores[id];
            productsCart.quantity=quantity;
            saveProducts.push(productsCart)

          }
                  
        }

        setCart(saveProducts)

    },[products])


    const[cart, setCart]=useState([])


    const addHandlerToCart=(mainProduct)=>{
        let newCart=[]
        const exist=cart.find(product=>product.id===mainProduct.id)
        if(!exist){
            mainProduct.quantity=1;
            newCart=[...cart, mainProduct]
        }else{
            const rest=cart.filter(product=>product.id!==mainProduct.id)
            exist.quantity=exist.quantity+1;
            newCart=[...rest, exist]
        }
        setCart(newCart)
        addToDb(mainProduct.id)
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
                <Cart cart={cart}>
                    <Link to='/order'>
                    <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;