import React from "react";
import logo from '../img/logoo.png'
import CartWidget from "./CartWidget";
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import {Link} from 'react-router-dom'
function NavBar(props) {
    
    return( <div className="header">
        <div className="cont-1">
            
            <div className="contenedor-logo">
              <Link to="/" className="link-logo"> <img className="logo" alt="logo" src={logo}/></Link> 
                
            </div>
            <div className="contenedor-carro">
            <CartWidget/>

            </div>

            </div>

        <div className="contenedor-lista">
        <ul className="lista">
        <li className="items"> <a className="opciones" href="/#">Componentes</a></li>
        <li className="items"><a className="opciones" href="/#">Pc completa</a></li>
        <li className="items"><a className="opciones" href="/#"> Perifericos</a></li>
        </ul>
        </div>
     </div>
     )
}
export default NavBar;