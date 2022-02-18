import React, {useState} from "react";

export const ItemCount = (props)=>{

    

    const [numero , setNumero] = useState(props.initial)

    const clickMas=()=>{
        if(numero<props.stock){
        setNumero(numero+1)}
    }
    const clickMenos=()=>{
        if(numero>1){
        setNumero(numero-1)}
    }
    return(
        <div className="col columna">
            <div className="linea">
                <a onClick={clickMenos} className="mas" href="#">-</a>
                <p className="numero-agregar">{numero}</p>
                <a onClick={clickMas} className="mas" href="#">+</a>
            </div>

            <div className="linea-boton">
                <button className="buton"  >Agregar al Carrito</button>
            </div>
        </div>
    )



}
