import "../ListaCategorias/ListaCategorias.css"
import { Link } from "react-router-dom"


export const ListaCategorias= ()=>{
   //MODIFICACION PROPUESTA EN REENTREGA
   const categories=[
      {
         cat:"all",
         texto:"TODOS LOS PRODUCTOS"
      },
      {
         cat:"amd",
         texto:"PC AMD"
      },
      {
         cat:"intel",
         texto:"PC INTEL"
      },
      {
         cat:"periferico",
         texto:"PERIFERICOS"
      },
      {
         cat:"silla",
         texto:"SILLAS GAMER"
      },


   ]
   return(
      //MODIFICACION PROPUESTA EN REENTREGA
      <div className="col-12 col-lg-2">
         <ul className="list-group">
      {categories.map(category=>(<Link key={category.cat} className="list-group-item categoria" to={`/categoria/${category.cat}`}>{category.texto}</Link>))}
      </ul>
      </div>
      /* <div className="col-12 col-lg-2">
         <ul className="list-group">
            <Link to={"/categoria/all"} className="list-group-item categoria" >TODOS LOS PRODUCTOS</Link>
            <Link to={"/categoria/amd"} className="list-group-item categoria">PC AMD</Link>
            <Link to={"/categoria/intel"} className="list-group-item categoria">PC INTEL</Link>
            <Link to={"/categoria/periferico"} className="list-group-item categoria">PERIFERICOS</Link>
            <Link to={"/categoria/silla"} className="list-group-item categoria">SILLAS GAMER</Link>
         </ul>
      </div> */
)}