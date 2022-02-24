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
        <Link to="/categoria/a" className="items"> <div className="opciones" >Pc completa</div></Link>
        <Link className="items" to="/categoria/amd"><div className="opciones" >Amd</div></Link>
        <Link to="/categoria/intel" className="items"><div className="opciones" > Intel</div></Link>
        </ul>
        </div>
     </div>
     )
}
export default NavBar;