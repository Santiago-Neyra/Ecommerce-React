import React, {useState} from "react";
import { Link } from "react-router-dom";
export const ItemCount = (props)=>{

    
   
    

    
    return(
        <div className="col columna">
            <div className="linea" style={{display: props.estadoTres}} >
                <a onClick={props.clickMenos} className="mas" href="#">-</a>
                <p className="numero-agregar">{props.count}</p>
                <a onClick={props.clickMas} className="mas" href="#">+</a>
            </div>

            <div className="linea-boton">
                <button className="buton" disabled={props.show} style={{display:props.estadoDos}} onClick={props.funcionDoble} >Sumar al Carrito</button>
                <Link className="link-finaly" to="/cart"><button className="butonFinalizar" style={{display: props.estado}} disabled={!props.show} onClick={props.onAdd} >Ir a finalizar Compra</button></Link>
            </div>
        </div>
    )



}
