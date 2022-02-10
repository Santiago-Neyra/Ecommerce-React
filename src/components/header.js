import react from "react";
import logo from '../img/a.png'
import cart from '../img/cart.png'
import CartWidget from "./CartWidget";

function Header() {
    
    return( <div className="header">
        <div className="cont-1">
            <div className="contenedor-logo"><img className="logo" alt="logo" src={logo}/></div>
            <div className="contenedor-carro">
            <CartWidget/>

            </div>

            </div>

        <div className="contenedor-lista">
        <ul className="lista">
        <li className="items"> <a href="/#">Componentes</a></li>
        <li className="items"><a  href="/#">Pc completa</a></li>
        <li className="items"><a  href="/#"> Perifericos</a></li>
        </ul>
        </div>
     </div>
     )
}
export default Header;