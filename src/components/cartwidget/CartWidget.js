import React, {useState} from "react";
import { Fragment } from "react/cjs/react.production.min";
// import cart from '../../src/img/cart.png'

function CartWidget() {

const [numero, setNumero]=useState(0);

return(
    <>
<p className="numero">{numero}</p>
<img className="carrito" src="https://i.postimg.cc/W1g5TQFd/cart.png"
 alt="cart" />

</>
)


}
export default CartWidget;