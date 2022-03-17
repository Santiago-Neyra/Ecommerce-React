

//import logo from '../src/img/logoo.png'
import CartWidget from "../cartwidget/CartWidget";

import {Link} from 'react-router-dom'

function NavBar(props) {
    
    
    return( <div className="header">
        <div className="cont-1">
            
            <div className="contenedor-logo">
              <Link to="/" className="link-logo"> <img className="logo" alt="logo" src="https://i.postimg.cc/nLx0z0B0/logoo.png"/></Link> 
                
            </div>
            <div className="contenedor-carro">
            <CartWidget/>

            </div>

            </div>

        <div className="contenedor-lista">
        <ul className="lista">
        <Link to="/" className="items"> <div className="opciones" >INICIO</div></Link>
        <Link to="/categoria/all" className="items"> <div className="opciones" >PRODUCTOS</div></Link>
        <Link className="items" to="/nosotros"><div className="opciones" >NOSOTROS</div></Link>
        </ul>
        </div>
     </div>
     )
}
export default NavBar;