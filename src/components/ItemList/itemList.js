import { useEffect, useState } from "react"
import { Item } from "../item/item"
export const ItemList = ({productos})=>{
    
    //vemos como llega la categoria
   
    //con esta funcion filtramos los productos por la categoria
    
    /* //definifimos el estado productos filtrados
    
    //mostramos en consola los productos filtrados
    console.log(productosFiltrados)
    //cada vez que se actualiza la categoria, se realiza el filtro
    useEffect(()=>{
         
        return setProductosFiltrados(funcionFiltro())

    },[categoriaId])

    //si los productos todavia no cargaron mostramos..
    if(productos.length===0){
        return(<div className="loading">
            <div class="spinner-border text-danger spiner" role="status"></div>
        <p className="texto-carga">Cargando productos...</p>
        </div>) 
    }
    //si no existe ningun producto filtrado con la categoria, mostramos todos
    
        if(productosFiltrados.length===0){
        return  <Item productos={productos} greeting="Productos" ></Item>}
    
    //si existe productos filtrados mostramos los productos filtrados
    if(productosFiltrados.length!==0){
        return  <Item productos={productosFiltrados} greeting="Productos" ></Item>
    } */
    if(productos.length===0){
        return(<div className="loading">
            <div class="spinner-border text-danger spiner" role="status"></div>
        <p className="texto-carga">Cargando productos...</p>
        </div>) 
    }
    else{
        return  <Item productos={productos} greeting="Productos" ></Item>
    }


}

    