import React, { useState } from "react";
import { ItemList } from "../ItemList/itemList";



export const NumeroEnCarrito= React.createContext();

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems]=useState([])
    const [countWidget, SetCountWidget]=useState(0)
    
    const addItems=(numero, item)=>{
        console.log(cartItems)
        SetCountWidget((countWidget+numero))
        setCartItems(cartItems.push(item))
        
    }
   

    
    return(
        
        <NumeroEnCarrito.Provider value ={{countWidget, cartItems, addItems}}>{children}</NumeroEnCarrito.Provider>
    )
}