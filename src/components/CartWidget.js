import react from "react";
import { Fragment } from "react/cjs/react.production.min";
import cart from '../img/cart.png'
function CartWidget() {
return(
    <>
<p className="numero">3</p>
<img className="carrito" src={cart} alt="cart" />

</>
)


}
export default CartWidget;