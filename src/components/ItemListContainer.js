import React, {useEffect, useState} from "react";
import Lista from "./elementos.json"
import {ItemCount} from "./itemCount";
import {Link} from 'react-router-dom'
import {ItemDetailContainer} from  "../components/itemDetailContainer/ItemDetailCointainer"
import { useParams } from "react-router-dom"
export const ItemListContainer =({greeting})=> {
    

    const {categoriaId} = useParams();
    
    console.log(categoriaId);
    
    useEffect(()=>{



    }, [categoriaId])

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
const productosIntel= productos.filter(elemento=>elemento.marca==="intel")
const productosAmd= productos.filter(elemento=>elemento.marca==="amd")

//PARTE INTEL
if(categoriaId==="intel"){
    return(
        <div className="item-list">
        
        <h1 className="palabra-greeting"> {greeting} </h1>
         <div className="row">
         {productosIntel.map((elemento)=>
         
            
         <div  className="carta col-3" key={elemento.id}>
             

             <div>
                 
                 <img className="img-producto img-fluid" src={elemento.ruta} alt="Producto" /> 
                 <h2 className="nombre-producto">{elemento.name}</h2>
                <p>{elemento.description}</p>
            <Link className="link-detalle" to={"/detalles/"+( parseInt(elemento.id)-1)}><button className="detalle">VER DETALLE +</button></Link>
                <h4 className="precio-categorias">Precio contado: ${elemento.price}</h4>
                <p style={fstock(elemento.stock)} className="stock">stock: {elemento.stock}</p>
                <ItemCount stock={elemento.stock} initial={1} />
             </div>
             
             </div>)}
         </div>
        
        
         
        </div>
        )
        
}
if(categoriaId==="amd"){
    return(
        <div className="item-list">
        
        <h1 className="palabra-greeting"> {greeting} </h1>
         <div className="row">
         {productosAmd.map((elemento)=>
         
            
         <div  className="carta col-3" key={elemento.id}>
             

             <div>
                 
                 <img className="img-producto img-fluid" src={elemento.ruta} alt="Producto" /> 
                 <h2 className="nombre-producto">{elemento.name}</h2>
                <p>{elemento.description}</p>
            <Link className="link-detalle" to={"/detalles/"+( parseInt(elemento.id)-1)}><button className="detalle">VER DETALLE +</button></Link>
                <h4 className="precio-categorias">Precio contado: ${elemento.price}</h4>
                <p style={fstock(elemento.stock)} className="stock">stock: {elemento.stock}</p>
                <ItemCount stock={elemento.stock} initial={1} />
             </div>
             
             </div>)}
         </div>
        
        
         
        </div>
        )
        
}
else{
return(
<div className="item-list">

<h1 className="palabra-greeting"> {greeting} </h1>
 <div className="row">
 {productos.map((elemento)=> <div  className="carta col-3" key={elemento.id}>
     

     <div>
         
         <img className="img-producto img-fluid" src={elemento.ruta} alt="Producto" /> 
         <h2 className="nombre-producto">{elemento.name}</h2>
        <p>{elemento.description}</p>
    <Link to={"/detalles/"+( parseInt(elemento.id)-1)} className="d-flex justify-content-center link-detalle" ><button className="detalle">VER DETALLE +</button></Link>
        <h4 className="precio-categorias">Precio contado: ${elemento.price}</h4>
        <p style={fstock(elemento.stock)} className="stock">stock: {elemento.stock}</p>
        <ItemCount stock={elemento.stock} initial={1} />
     </div>
     
     </div>)}
 </div>


 
</div>
)}

}
