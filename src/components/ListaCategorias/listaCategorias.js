import "../ListaCategorias/ListaCategorias.css"
import { Link } from "react-router-dom"


export const ListaCategorias= ()=>{





return(
<div className="col-2">
             <ul className="list-group">
             <Link to={"/categoria/all"} className="list-group-item categoria" >TODOS LOS PRODUCTOS</Link>
            <Link to={"/categoria/amd"} className="list-group-item categoria">PC AMD</Link>
            <Link to={"/categoria/intel"} className="list-group-item categoria">PC INTEL</Link>
            <Link to={"/categoria/all"} className="list-group-item categoria">PERIFERICOS</Link>
            <Link to={"/categoria/all"} className="list-group-item categoria">SILLAS GAMER</Link>
            </ul>
                 
                 </div>

)

}