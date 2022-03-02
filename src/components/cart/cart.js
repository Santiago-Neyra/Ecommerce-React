import { useContext } from "react";
import { NumeroEnCarrito } from "../numerocarritocontexto/contextocarrito";


export const Cart=()=>{
    const {cartItems}=useContext(NumeroEnCarrito)
    const {countWidget}=useContext(NumeroEnCarrito)
    
    return(
   <>
  
    <div>Carrito</div>
    <p>Número de productos en el carrito: {countWidget}</p>
    
    
    
            
    </>
)
}