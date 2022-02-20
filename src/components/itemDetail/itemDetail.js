import Lista from "../elementos.json"
import { useParams } from "react-router-dom"
import React, {useEffect, useState} from "react";
import { ItemCount } from "../itemCount";
import { textAlign } from "@mui/system";




export const ItemDetail= ()=>{
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
        <div className="row">
            <div className="col-8 contenedor-img-detail"><img className="imagen-detail" src={Lista[id].ruta} alt="foto" /></div>
    <div className="col-4 textos-detalles">
    <h1  className="dos">{Lista[id].name}</h1>
    
    <p>{Lista[id].description}</p>
    <h4>Precio contado: ${Lista[id].price}  </h4>
    <p style={fstock(Lista[id].stock)} className="stock">stock: {Lista[id].stock}</p>
    <ItemCount stock={Lista[id].stock} initial={1} />
    </div>
    </div>
    </div>

)


}