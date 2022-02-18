import React, {useEffect, useState} from "react";
import Lista from "./elementos.json"
import {ItemCount} from "./itemCount";
export const ItemListContainer =({greeting})=> {

const [productos, setProductos]= useState([]);
// CREAMOS UNA PROMESA QUE TIENE DOS FUNCIONES, RESOLVE Y REJECT
const promesa = new Promise((resolve, reject)=>{
//CON ESTE SET TIMEOUT TARDAREMOS 2S EN RECIBIR RESPUESTA, SIMULANDO UN SERVIDOR
    setTimeout(()=>{
//NOS RETORNA UN ARREGLO
    resolve(Lista)
}, 2000);

})

//AL OBTENER LOS DATOS DEL SERVIDOR NOSOTROS UTILIZAMOS 
useEffect(()=>{
    //LLAMAMOS A PROMESA CUANDO OBTENEMOS EL RESULTADO
    promesa.then(resultado=>{
     setProductos(resultado)
    })
})


function fstock(stock){
    if(stock>2){
        return ({color: "green"})
    }
    else{
        return ({color:"red"})
    }
}
return(
<div className="item-list">
<h1 className="palabra-greeting"> {greeting} </h1>
 <div className="row">
 {productos.map((elemento)=> <div  className="carta col-3" key={elemento.id}>
     

     <div>
         
         <img className="img-producto img-fluid" src={elemento.ruta} alt="Producto" /> 
         <h2 className="nombre-producto">{elemento.name}</h2>
        <p>{elemento.description}</p>
        <button className="detalle">VER DETALLE +</button>
        <h4>Precio contado: ${elemento.price}</h4>
        <p style={fstock(elemento.stock)} className="stock">stock: {elemento.stock}</p>
        <ItemCount stock={elemento.stock} initial={1} />
     </div>
     
     </div>)}
 </div>



</div>
)

}
