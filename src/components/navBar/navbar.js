import "../navBar/navbar.css"
//import logo from '../src/img/logoo.png'
import CartWidget from "../cartwidget/CartWidget";
import {Link} from 'react-router-dom'
function NavBar(props) {
  return(
    <div className="header">
      <div className="cont-1">
        <div className="contenedor-logo">
            <Link to="/" className="link-logo"> <img className="logo" alt="logo" src="https://i.postimg.cc/nLx0z0B0/logoo.png"/></Link> 
        </div>
        <div className="contenedor-carro">
          <CartWidget/>
        </div>
      </div>
      <div className="contenedor-lista" >
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid d-flex justify-content-center">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup " aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span >
                <img className="icono-expand" alt="menu-hamburguesa" src="https://i.postimg.cc/RhwLpsQL/menu.png"></img>
              </span>
            </button>
            <div className="collapse navbar-collapse navBar-mark" id="navbarNavAltMarkup">
              <Link to="/" className="nav-link active" aria-current="page" href="#">HOME</Link>
              <Link to="/categoria/all" className="nav-link" href="#">PRODUCTOS</Link>
              <Link to="/nosotros" className="nav-link" href="#">NOSOTROS</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
)
}
export default NavBar;