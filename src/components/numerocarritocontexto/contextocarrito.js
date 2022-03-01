import React, { useState } from "react";
import { ItemList } from "../ItemList/itemList";



export const NumeroEnCarrito= React.createContext();

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems]=useState([])
    const [countWidget, SetCountWidget]=useState(0)
    
    const addItems=(item, numero)=>{
        setCartItems([...cartItems,{...item ,numero}])
        SetCountWidget(prev=>prev+numero)
    }


    
    return(
        <NumeroEnCarrito.Provider value ={{countWidget, cartItems, addItems}}>{children}</NumeroEnCarrito.Provider>
    )
}