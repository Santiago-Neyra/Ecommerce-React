import { useEffect, useState } from "react"
import { Item } from "../item/item"
export const ItemList = ({productos, categoriaId})=>{
    const productosIntel= productos.filter(elemento=>elemento.marca==="intel")
    const productosAmd= productos.filter(elemento=>elemento.marca==="amd")
    
    /* const categorias= ["amd", "intel"]

    const [filtro , setFiltro]= useState(productos);

     useEffect(()=>{
        if(categorias.includes(categoriaId))
        {
        setFiltro(productos.filter(elemento=>elemento.marca===categoriaId)}
        )
        else{
              setFiltro(filtro=productos)
          }

          
    }, [categoriaId]) */ 
    if(productos.length===0){
        return <p className="loading">Cargando productos...</p>
    }


    if (categoriaId==="amd"){
        return(

            <Item productos={productosAmd} greeting="Productos AMD" ></Item>
            
        )
    }
    if (categoriaId==="intel"){
        return(
            <Item productos={productosIntel} greeting="Productos INTEL"></Item>
            
        )
    }
    else{
        return(
            <Item productos={productos} greeting="Nuestros productos" ></Item>
            
        )
    }

}
    