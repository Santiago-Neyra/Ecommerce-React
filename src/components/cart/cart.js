import { useContext,  useState } from "react";
import { NumeroEnCarrito } from "../numerocarritocontexto/contextocarrito";
import "../cart/cart.css"
import { Link } from "react-router-dom";
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { margin } from "@mui/system";



export const Cart=()=>{
    const {cartItems}=useContext(NumeroEnCarrito)
    const{Clear}=useContext(NumeroEnCarrito)
    const {removeItems}=useContext(NumeroEnCarrito)
    const {precioTotal}=useContext(NumeroEnCarrito)
    const {AddInCart}=useContext(NumeroEnCarrito)
    const {RestInCart}=useContext(NumeroEnCarrito)
    const [nombreUsuario, setNombreUsuario]=useState()
    const [direccionUsuario, setDireccionUsuario]=useState()
    const [numeroUsuario, setNumeroUsuario]=useState()
    const [emailUsuario, setEmailUsuario]=useState()
    
        
    
    const funcionNombre=(e)=>{
        return(
            setNombreUsuario(e.target.value)
            
        )
    }
    const funcionDireccion=(e)=>{
        return(
            setDireccionUsuario(e.target.value)
            
        )
    }
    const funcionTelefono=(e)=>{
        return(
            setNumeroUsuario(e.target.value)
            
        )
    }
    const funcionEmail=(e)=>{
        return(
            setEmailUsuario(e.target.value)
            
        )
    }
    
    const realizarOrden=async(e)=>{
        let orden= {
            comprador:{
                nombre:nombreUsuario,
                direccion:direccionUsuario,
                numero:numeroUsuario,
                emailUsuario:emailUsuario
            },
            items:cartItems,
            total:"$"+precioTotal
        }
        const queryCollection=collection(db, "order")
        orden.date= Timestamp.fromDate(new Date())
        console.log(orden)
            //con esto creo unnuevo documento, paso dos parametros, dodonde lo guardo y que guardo
        const docRef=await addDoc(queryCollection, orden)
        Clear()
        
    }
return(
    <>
        <div className="container">
            <div className="row contenedorCart">
                <div className="col-lg-6 col-12 d-flex contenedor-facturacion">
                    <div className="container-fluid">
                        <h2 className="tituloCarritoDeCompras">PRODUCTOS EN CARRITO:</h2>
                        {cartItems.length === 0 ? (
                            <div className="d-flex justify-content-center carrito-vacio">
                                <h2 style={{width:"50%", margin:"auto"}}>Carrito vacío..</h2>
                                <img className="img-vacio" style={{margin:"auto", width:"300px"}} src="https://i.postimg.cc/ydj2C7RQ/e048beec6b899e794ea3a10bca235742-funny-gamer-cartoon.png"></img>
                            </div>) :(
                                cartItems.map((prod)=>{
                                    return(
                                        <div key={prod.id} className="card fila-producto-carro">
                                            <div className="d-flex justify-content-center">
                                                <img className="imagenes-carrito" alt="Imagen producto" src={prod.ruta} ></img>
                                            </div>
                                            <p className="name-carro">{prod.name}</p>
                                            <div className="CountCart">
                                                <div className="d-flex align-items-center">
                                                    <button className="addAndRest" onClick={()=>RestInCart(prod)}>-
                                                    </button>
                                                </div>
                                                <p className="cant-carro">Cantidad: {prod.cantidadDelItem}
                                                </p>
                                                <div className="d-flex align-items-center" >
                                                    <button className="addAndRest" onClick={()=>AddInCart(prod)}>+</button>
                                                </div>
                                            </div>
                                            <p className="precio-carro">Total: {`$${(prod.price*prod.cantidadDelItem)}`}
                                            </p>
                                            <div className="contenedor-remove-item">
                                                <a className="remove-carrito"  onClick={()=>removeItems(prod)}>
                                                    <img className="icono-carrito" src="https://i.postimg.cc/W4mfSXpL/eliminar.png"/>
                                                </a>
                                            </div>
                                        </div>)}))}
                                        {cartItems.length>0 ?(
                                        <div className="d-flex justify-content-center">
                                            <button className="buton-4"  onClick={()=>Clear()}>Vaciar carrito</button>
                                        </div>    
                                        ) : "" }
                                        
                    </div>
                    
                </div>
                <div className="col-lg-6 col-12 contenedor-facturacion">
                    <h2 className="titulo-fact">FACTURACION Y ENVIO</h2>
                    <div >
                        <div className="input-group mb-3 formulario-compra">
                            <span className="input-group-text" id="basic-addon1">Nombre y apellido</span>
                            <input onChange={funcionNombre} type="text"  className="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div >
                        <div className="input-group mb-3 formulario-compra">
                            <span className="input-group-text" id="basic-addon1">Dirección</span>
                            <input onChange={funcionDireccion} type="text" className="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div >
                        <div className="input-group mb-3 formulario-compra">
                            <span className="input-group-text" id="basic-addon1">Número de teléfono</span>
                            <input onChange={funcionTelefono} type="text" className="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div >
                        <div className="input-group mb-3 formulario-compra">
                            <input onChange={funcionEmail} type="text" className="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
                        <span className="input-group-text" id="basic-addon1">@gmail.com</span>
                        </div>
                    </div>
                    <div >
                        <div className="input-group mb-3 formulario-compra">
                            <span className="input-group-text" id="basic-addon1">Número de Tarjeta</span>
                            <input type="text" className="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>         
                    <div >
                        <div className="input-group mb-3 formulario-compra">
                            <span className="input-group-text" id="basic-addon1">DNI titular</span>
                            <input type="text" className="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div >
                        <div className="input-group mb-3 formulario-compra">
                            <span className="input-group-text" id="basic-addon1">Código de seguridad</span>
                        <input type="text" className="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="totalCarrete">Total carrito:<span style={{color: "rgb(47, 102, 76" , fontWeight:"600"}}>${precioTotal}</span>
                        </p>
                    </div>

                    <Link to="/finalizado" className="d-flex justify-content-center link-finalizarr">
                        <button onClick={realizarOrden} className="buton">FINALIZAR COMPRA</button>
                    </Link>
                    <Link className="link-volver" to="/categoria/all"> 
                        <div className="linea-boton">
                            <button className="buton2">Volver al catálogo</button>
                        </div>
                    </Link>
                </div>
                </div>
        </div>
</>
)
}