import { Fragment, useEffect, useState } from "react"
import reactDom from "react-dom"
import { useParams } from "react-router-dom"
import Lista from "../elementos.json"
import { ItemDetail } from "../itemDetail/itemDetail"
import { getDoc, doc } from "firebase/firestore";
import {db} from "../../utils/firebase";

export const ItemDetailContainer=()=>{
  const [itemEncontrado, setItemEncontrado]= useState([])
  const {id} = useParams();
  useEffect(()=>{
    const getData= async()=>{
        const queryDoc = doc(db, 'item', id )
        const response= await getDoc(queryDoc);
        const data = {...response.data(), id:id };
        setItemEncontrado(data)
        
    }
    getData();
},[])
return(
    <div className="container">
      <ItemDetail itemEncontrado={itemEncontrado}></ItemDetail>
    </div>
)
}
