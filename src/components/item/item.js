import {ItemCount} from "../itemCount/itemCount";
import { useState } from "react";
import {Link} from 'react-router-dom'
export const Item= ({greeting, productos,})=>{
    const [numero , setNumero] = useState(1)
    const [estado, setEstado]=useState("none")
    const [show, setShow]=useState(false)
    const [estadoDos, SetEstadoDos]=useState("block")
    const [estadoTres, SetEstadoTres]=useState("flex")


    const onAdd=()=>{
        setShow(!show)
        setEstado("block")
        SetEstadoDos("none")
        SetEstadoTres("none")
        console.log("se agregaron", numero)
    }

  
    const clickMenos=(e)=>{
        e.preventDefault();
        if(numero>1){
        setNumero(numero-1)}
    }
    


     
    function fstock(stock){
        if(stock>2){
            return ({color: "green"})
        }
        else{
            return ({color:"red"})
        }
    }
    
    return(

    <div className="item-list">
        
        <h1 className="palabra-greeting"> {greeting} </h1>
         <div className="row">
         {productos.map((elemento)=>
         
            
         <div  className="carta col-3" key={elemento.id}>
             

             <div>
                 <div className="d-flex justify-content-center">
                 <img className="img-producto img-fluid" src={elemento.ruta} alt="Producto" /> </div>
                 <h2 className="nombre-producto">{elemento.name}</h2>
                <p>{elemento.description}</p>
                <h4 className="precio-categorias precio">Precio contado: <span className="precio-detail-numero">${elemento.price}</span></h4>
                <p style={fstock(elemento.stock)} className="stock">stock: {elemento.stock}</p>
            <Link className="link-detalle" to={"/detalles/"+( parseInt(elemento.id))}><button className="detalle">VER DETALLE +</button></Link>
                
               
             </div>
             
             </div>)}
         </div>
        
        
         
        </div>
)

}