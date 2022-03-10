import React, {useEffect, useState} from "react";
import Lista from "../elementos.json"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/itemList";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../utils/firebase";

export const ItemListContainer =({greeting})=> {
    const [productos, setProductos]= useState([]);

    useEffect(()=>{
    const getData= async()=>{
        const query = collection(db, 'item')
        const response= await getDocs(query);
        console.log("respuesta", response.docs)
        const data =response.docs.map(doc=>{ return ({id: doc.id, ...doc.data()}
        )})
        setProductos(data)
        console.log(data)
    }
    getData();
},[])
        
    

    
    
    
    
    
    const {categoriaId} = useParams();
    useEffect(()=>{
 }, [categoriaId])

/* // CREAMOS UNA PROMESA QUE TIENE DOS FUNCIONES, RESOLVE Y REJECT
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
        setProductos(resultado)

    })
}) */

return(
    <ItemList productos={productos} categoriaId={categoriaId} />

)


//PARTE INTEL

}