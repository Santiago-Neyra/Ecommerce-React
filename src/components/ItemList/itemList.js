import { useEffect, useState } from "react"
import { Item } from "../item/item"
export const ItemList = ({productos, categoriaId})=>{
    const productosIntel= productos.filter(elemento=>elemento.marca==="intel")
    const productosAmd= productos.filter(elemento=>elemento.marca==="amd")
    
    const [productosFiltrados, setProductosFiltrados]=useState(productos)
    const funcionFiltro=()=>{
        return(productos.filter(e=>e.marca===categoriaId))

    }

    useEffect(()=>{
         
        return setProductosFiltrados(funcionFiltro)

    },[categoriaId])

    useState(productos.filter(e=>e.marca===categoriaId))
    console.log(productosFiltrados)
    
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
        return(<div className="loading">
            <div class="spinner-border text-danger spiner" role="status"></div>
        <p className="texto-carga">Cargando productos...</p>
        </div>) 
    }
    if(productosFiltrados.length===0){
        if(productosFiltrados.length===0){
        return  <Item productos={productos} greeting="Productos" ></Item>}
    }
    
    if(productosFiltrados.length!==0){
        return  <Item productos={productosFiltrados} greeting="Productos" ></Item>
    }

    /* if (categoriaId==="amd"){
        return(

            <Item productos={productosFiltrados} greeting="Productos AMD" ></Item>
            
        )
    }
    if (categoriaId==="intel"){
        return(
            <Item productos={productosFiltrados} greeting="Productos INTEL"></Item>
            
        )
    }
    else{
        return(
            <Item productos={productosFiltrados} greeting="Nuestros productos" ></Item>
            
        )
    } */

}
    