
import "../navBar/navbar.css"
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

<div className="contenedor-lista" >
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid d-flex justify-content-center">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup " aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span > <img className="icono-expand" src="https://i.postimg.cc/RhwLpsQL/menu.png"></img></span>
    </button>
    <div class="collapse navbar-collapse navBar-mark" id="navbarNavAltMarkup">
      
        <Link to="/" class="nav-link active" aria-current="page" href="#">HOME</Link>
        <Link to="/categoria/all" class="nav-link" href="#">PRODUCTOS</Link>
        <Link to="/nosotros" class="nav-link" href="#">NOSOTROS</Link>
        
      
    </div>
  </div>
</nav>
        </div>
</div>
)
}
export default NavBar;