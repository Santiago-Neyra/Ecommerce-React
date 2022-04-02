import { useEffect, useState } from "react"
import { Item } from "../item/item"
export const ItemList = ({productos})=>{
    if(productos.length===0){
        return(
            <div className="loading">
                <div className="spinner-border text-danger spiner" role="status"></div>
                <p className="texto-carga">Cargando productos...</p>
            </div>
        )
        
    }
    else{
        return  <Item productos={productos} greeting="Productos" ></Item>
    }
}

    