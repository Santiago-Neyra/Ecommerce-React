import { Fragment, useEffect } from "react"
import reactDom from "react-dom"
import { useParams } from "react-router-dom"
import Lista from "../elementos.json"
import { ItemDetail } from "../itemDetail/itemDetail"
export const ItemDetailContainer=()=>{
return(
    <div className="container">
      <ItemDetail></ItemDetail>
    </div>
)
}
