

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
        <Link to="/categoria/all" className="items"> <div className="opciones" >Pc completa</div></Link>
        <Link className="items" to="/categoria/amd"><div className="opciones" >Amd</div></Link>
        <Link to="/categoria/intel" className="items"><div className="opciones" > Intel</div></Link>
        </ul>
        </div>
     </div>
     )
}
export default NavBar;