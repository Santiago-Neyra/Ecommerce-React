import react from "react";

function Header() {
    
    return( <div className="header">
        <div>
           <h1 className="titulo">Dual Key Gaming</h1>
         </div>    
        <div className="contenedor-lista">
        <ul className="lista">
        <li className="items"> <a href="#">Componentes</a></li>
        <li className="items"><a  href="#">Pc completa</a></li>
        <li className="items"><a  href="#"> Perifericos</a></li>
        </ul>
        </div>
     </div>
     )
}
export default Header;