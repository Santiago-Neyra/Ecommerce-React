import React, { useState } from "react";
import { ItemList } from "../ItemList/itemList";



export const NumeroEnCarrito= React.createContext();

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems]=useState([])
    const [countWidget, SetCountWidget]=useState(0)
    const [precioTotal, setPrecioTotal]=useState(0)
    
    const addItems = (item, numeroAPasar)=>{
       
        setPrecioTotal(e=>e+(item.price*numeroAPasar))
        if (cartItems.some(product => product.id === item.id)) {
            
            const copyPaste = [...cartItems];
            const prodIndex = cartItems.findIndex(product => product.id === item.id);
            copyPaste[prodIndex]={
                ...copyPaste[prodIndex],
                numeroAPasar: copyPaste[prodIndex].numeroAPasar + numeroAPasar,
            };
            setCartItems(copyPaste);
            SetCountWidget(prev => prev + numeroAPasar)
            
        
        }else{
            
            setCartItems([...cartItems,{...item,numeroAPasar}])
            SetCountWidget(prev => prev + numeroAPasar)}
            
    }
    const removeItems = (item) =>{
        
        const newList = cartItems.filter((e)=> {return e.id!==item.id})
        setCartItems(newList)
        setPrecioTotal(prev =>{return prev-(item.price * item.numeroAPasar)})
        SetCountWidget(prev=>{return prev-item.numeroAPasar})
        
     }
     const AddInCart= (item)=>{
         if(item.numeroAPasar<item.stock){
         SetCountWidget(countWidget=>countWidget+1)
         setPrecioTotal(a =>  parseInt(a)+parseInt(item.price))
         const newItems= cartItems.map((items)=>{
            if(item.id===items.id){
                return{
                    ...items,
                    numeroAPasar: (items.numeroAPasar+1) 
                }
            }
            
            return items 
        })
        setCartItems(newItems)
        console.log(cartItems)
    }
     }
     const RestInCart= (item)=>{
         if(item.numeroAPasar>1){
        SetCountWidget(countWidget=>countWidget-1)
        setPrecioTotal(prev=>prev-(item.price))
        const newItems= cartItems.map((items)=>{
            if(item.id===items.id){
                return{
                    ...items,
                    numeroAPasar: (items.numeroAPasar-1) 
                }
            }
        
            return items 
        })
        setCartItems(newItems)
        console.log(cartItems)

       

    }
    }

    
    return(
        
        <NumeroEnCarrito.Provider value ={{countWidget, cartItems, addItems, removeItems, precioTotal, AddInCart, RestInCart}}>{children}</NumeroEnCarrito.Provider>
    )
}
