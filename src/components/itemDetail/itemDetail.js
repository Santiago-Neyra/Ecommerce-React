import Lista from "../elementos.json"
import { useParams } from "react-router-dom"
import React, {useEffect, useState} from "react";
import { ItemCount } from "../itemCount/itemCount";
import { textAlign } from "@mui/system";




export const ItemDetail= ()=>{
    
    const [producto, setProducto]= useState([]);
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
    
    console.log(id);
    
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

return(
    
    <div className="container item-detail">
        {console.log(producto[0])}
        <div className="row contenedor-detail">
            <div className="col-8 contenedor-img-detail"><img className="imagen-detail" src={Lista[id].ruta} alt="foto" /></div>
    <div className="col-4 textos-detalles">
    <h1  className="dos">{Lista[id].name}</h1>
    
    <p className="detail-description">{Lista[id].description}</p>
    <h4 className="detail-precio">Precio contado: <span className="precio-detail-numero">${Lista[id].price}</span>  </h4>
    <p style={fstock(Lista[id].stock)} className="stock">stock: {Lista[id].stock}</p>
    <ItemCount stock={Lista[id].stock} initial={1} />
    </div>
    </div>
    </div>

)


}