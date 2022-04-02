import React, {useEffect, useState} from "react";
import Lista from "../elementos.json"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/itemList";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../utils/firebase";

export const ItemListContainer =({greeting})=> {
    const [productos, setProductos]= useState([]);
    const {categoriaId} = useParams();
    const [productosFiltrados, setProductosFiltrados]=useState(productos)
    useEffect(()=>{
        const getData= async()=>{
            const query = collection(db, 'item')
            const response= await getDocs(query);
            const data =response.docs.map(doc=>{ return ({id: doc.id, ...doc.data()}
            )})
        setProductos(data)
    }
        getData();
},[])
    useEffect( () => {
        if(categoriaId){
            setProductosFiltrados(productos.filter(e=>e.marca===categoriaId))}
        if(categoriaId===undefined){
            setProductosFiltrados(productos)
        }
    },[categoriaId,productos])
    return(
        <ItemList productos={productosFiltrados.length>0? productosFiltrados:productos}   />
    )}