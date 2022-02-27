import Lista from "../elementos.json"
import { useParams } from "react-router-dom"
import React, {useEffect, useState} from "react";
import { ItemCount } from "../itemCount/itemCount";
import { textAlign } from "@mui/system";




export const ItemDetail= ()=>{
    
    const [productoss, setProducto]= useState([]);
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
     setProducto(resultado)
    })
})
    
    
    const {id} = useParams();
    
    
    useEffect(()=>{



    }, [id])

    function fstock(stock){
        if(stock>2){
            return ({color: "green"})
        }
        else{
            return ({color:"red"})
        }
    }
let itemEncontrado= Lista.find(e=>{
   return (e.id===id)
})



return(
    
    <div className="container item-detail">
      
        <div className="row contenedor-detail">
            <div className="col-8 contenedor-img-detail"><img className="imagen-detail" src={itemEncontrado.ruta} alt="foto" /></div>
    <div className="col-4 textos-detalles">
    <h1  className="dos">{itemEncontrado.name}</h1>
    
    <p className="detail-description">{itemEncontrado.description}</p>
    <h4 className="detail-precio">Precio contado: <span className="precio-detail-numero">${itemEncontrado.price}</span>  </h4>
    <p style={fstock(itemEncontrado.stock)} className="stock">stock: {itemEncontrado.stock}</p>
    <ItemCount stock={itemEncontrado.stock} initial={1} />
    </div>
    </div>
    </div>

)


}