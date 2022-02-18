import { Fragment } from "react"
import reactDom from "react-dom"
import Lista from "../elementos.json"
export const ItemDetailContainer=()=>{

   return(
      <>
      <h1>{Lista[1].nombre}</h1>
      </>
    
   )
}