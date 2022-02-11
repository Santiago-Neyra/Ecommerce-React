import react, {Component,useState} from "react";
import { Fragment } from "react/cjs/react.production.min";
import cart from '../img/cart.png'

function CartWidget() {

const [numero, setNumero]=useState(0);

return(
    <>
<p className="numero">{numero}</p>
<img className="carrito" src={cart} alt="cart" />

</>
)


}
export default CartWidget;