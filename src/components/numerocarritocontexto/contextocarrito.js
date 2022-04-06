import React, { useState } from "react";




export const NumeroEnCarrito= React.createContext();

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems]=useState([])
    const [countWidget, SetCountWidget]=useState(0)
    const [precioTotal, setPrecioTotal]=useState(0)
    const addItems = (item, cantidadDelItem, cantReal)=>{
        
        
            
            if (cartItems.some(product => product.id === item.id )) {
                if( cartItems.some(product => product.id === item.id &&  (product.stock >= (product.cantidadDelItem+ cantidadDelItem)))  ){
                setPrecioTotal(e=>e+(item.price*cantidadDelItem))
                const copyPaste = [...cartItems];
                const prodIndex = cartItems.findIndex(product => product.id === item.id);
                copyPaste[prodIndex]={
                    
                    ...copyPaste[prodIndex],
                    cantidadDelItem: copyPaste[prodIndex].cantidadDelItem + cantidadDelItem,
                };
                setCartItems(copyPaste);
                SetCountWidget(prev => prev + cantidadDelItem)
                }
                else{
                    alert("stock máximo superado")
                }   
            }
            
            else{
            setCartItems([...cartItems,{...item,cantidadDelItem, cantReal}])
            SetCountWidget(prev => prev + cantidadDelItem)
            setPrecioTotal(e=>e+(item.price*cantidadDelItem))
            }
            
    }
    const removeItems = (item) =>{
        const newList = cartItems.filter((e)=> {return e.id!==item.id})
        setCartItems(newList)
        setPrecioTotal(prev =>{return prev-(item.price * item.cantidadDelItem)})
        SetCountWidget(prev=>{return prev-item.cantidadDelItem})
        
    }
    const AddInCart= (item)=>{
        if(item.cantidadDelItem<item.stock){
            SetCountWidget(countWidget=>countWidget+1)
            setPrecioTotal(a =>  parseInt(a)+parseInt(item.price))
            const newItems= cartItems.map((items)=>{
            if(item.id===items.id){
                return{
                    ...items,
                    cantidadDelItem: (items.cantidadDelItem+1) 
                } }
                return items 
            })
            setCartItems(newItems)
        }
    }
    const RestInCart= (item)=>{
        if(item.cantidadDelItem>1){
            SetCountWidget(countWidget=>countWidget-1)
            setPrecioTotal(prev=>prev-(item.price))
            const newItems= cartItems.map((items)=>{
                if(item.id===items.id){
                    return{
                        ...items,
                        cantidadDelItem: (items.cantidadDelItem-1) 
                    }
                }
        
            return items 
        })
        setCartItems(newItems)
    }
    }
    const Clear=()=>{
        setPrecioTotal(0)
        setCartItems([])
        SetCountWidget(0)
    }
    
    return(
        <NumeroEnCarrito.Provider value ={{countWidget, cartItems, addItems, removeItems, precioTotal, AddInCart, RestInCart, Clear}}>{children}</NumeroEnCarrito.Provider>
    )
}
