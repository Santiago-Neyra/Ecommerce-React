import {ItemCount} from "../itemCount/itemCount";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { ListaCategorias } from "../ListaCategorias/listaCategorias";
export const Item= ({greeting, productos,})=>{
    
 return(

    <div className="item-list">
        
        <h1 className="palabra-greeting"> {greeting} </h1>
        
         <div className="row">
             <ListaCategorias/>
                 <div className="col-10">
                 <div className="row">
                 
                 
         {productos.map((elemento)=>
         
            
         <div  className="carta col-3" key={elemento.id}>
             

             <div>
                 <div className="d-flex justify-content-center">
                 <img className="img-producto img-fluid" src={elemento.ruta} alt="Producto" /> </div>
                 <h2 className="nombre-producto">{elemento.name}</h2>
                <p>{elemento.description}</p>
                <h4 className="precio-categorias precio">Precio contado: <span className="precio-detail-numero">${elemento.price}</span></h4>
                <p style={elemento.stock>2 ? {color: "green"} : {color:"red"}} className="stock">stock: {elemento.stock}</p>
            <Link className="link-detalle" to={"/detalles/"+( parseInt(elemento.id))}><button className="detalle">VER DETALLE +</button></Link>
                
               
             </div>
             
             </div>)}
         </div>
         </div>
         </div>
         
        
         
        </div>
)

}