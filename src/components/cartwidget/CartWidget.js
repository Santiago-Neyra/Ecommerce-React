import { letterSpacing } from "@mui/system";
import React, {useContext, useState} from "react";
import { Fragment } from "react/cjs/react.production.min";
import { NumeroEnCarrito } from "../numerocarritocontexto/contextocarrito";
import {Link} from 'react-router-dom'// import cart from '../../src/img/cart.png'

function CartWidget() {
const {countWidget}=useContext(NumeroEnCarrito)
if(countWidget>0){
        return(
<> 
<p className="numero">{countWidget}</p>
<Link to="/cart" >
<img className="carrito" src="https://i.postimg.cc/W1g5TQFd/cart.png"alt="cart" />
</Link>
</>
)
}else{
    return ""
}


}
export default CartWidget;