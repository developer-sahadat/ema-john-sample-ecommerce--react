import { useEffect, useState } from "react";
import { addedProducts } from "../../../utilities/fakedb";

const useCart=(products)=>{
    const[cart, setCart]=useState([])
 

    useEffect(()=>{
        const localStores=addedProducts();
        const saveCart=[]
        for(const id in localStores){
            const productsCart=products.find(product=>product.id===id)
    
            if(productsCart){
                const quantity=localStores[id]
                productsCart.quantity=quantity;
                saveCart.push(productsCart)
            }
        }
    
        setCart(saveCart)
    },[products])

    

    return [cart, setCart]


}

export default useCart;