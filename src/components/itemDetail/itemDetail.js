import Lista from "../elementos.json"
import { useParams } from "react-router-dom"
import React, {useContext, useEffect, useState} from "react";
import { ItemCount } from "../itemCount/itemCount";

import { NumeroEnCarrito } from "../numerocarritocontexto/contextocarrito";




export const ItemDetail= ()=>{
    const {addItems}=useContext(NumeroEnCarrito)
    const {countWidget}=useContext(NumeroEnCarrito)

    const [numero , setNumero] = useState(1)
    const [estado, setEstado]=useState("none")
    const [show, setShow]=useState(false)
    const [estadoDos, SetEstadoDos]=useState("block")
    const [estadoTres, SetEstadoTres]=useState("flex")
  
    const funcionDoble=(numeroAPasar, item)=>{
        onAdd()

        addItems(numeroAPasar, item)
        console.log(item)
        
    }

    const onAdd=()=>{
        setShow(!show)
        setEstado("block")
        SetEstadoDos("none")
        SetEstadoTres("none")
    
        
    
    }

    const clickMas=(e)=>{
        e.preventDefault();
        if(numero<itemEncontrado.stock){
        setNumero(numero+1)}
    }
    const clickMenos=(e)=>{
        e.preventDefault();
        if(numero>1){
        setNumero(numero-1)}
    }
    
    


    const [productoss, setProducto]= useState([]);
// CREAMOS UNA PROMESA QUE TIENE DOS FUNCIONES, RESOLVE Y REJECT
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
     setProducto(resultado)
    })
})
    
    
    const {id} = useParams();
    
    
    useEffect(()=>{



    }, [id])

    function fstock(stock){
        if(stock>2){
            return ({color: "green"})
        }
        else{
            return ({color:"red"})
        }
    }

    //el state corresponiente a la busqueda del item con respecto al id q tenemos
const [itemEncontrado, setItemEncontrado]= useState([])

//cuando el id cambia, se dispara el setitemencontrado que le cambia el valor a item encontrado
useEffect(()=>{
setItemEncontrado( Lista.find(e=>{
    return (e.id===id)
 }))

}, [id])


return(
    
    <div className="container item-detail">
       
        <div className="row contenedor-detail">
            <div className="col-8 contenedor-img-detail"><img className="imagen-detail" src={itemEncontrado.ruta} alt="foto" /></div>
    <div className="col-4 textos-detalles">
    <h1  className="dos">{itemEncontrado.name}</h1>
    
    <p className="detail-description">{itemEncontrado.description}</p>
    <p className="aviso"> Las PCs completas tardan entre 48hs y 72hs hábiles en ser armadas e instalarles el Windows, una vez armada, se realiza el envío o entrega correspondiente.</p>
    <h4 className="detail-precio">Precio contado: <span className="precio-detail-numero">${itemEncontrado.price}</span>  </h4>
    <p style={fstock(itemEncontrado.stock)} className="stock">stock: {itemEncontrado.stock}</p>
    <ItemCount stock={itemEncontrado.stock} clickMas={clickMas} clickMenos={clickMenos} initial={1} count={numero} estado={estado} estadoDos={estadoDos} onAdd={onAdd} show={show} estadoTres={estadoTres} funcionDoble={(numeroAPasar, item)=>funcionDoble(numeroAPasar,item)} item={itemEncontrado} />
    
    </div>
    </div>
    </div>

)


}