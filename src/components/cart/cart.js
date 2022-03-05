import { useContext, useEffect, useState } from "react";
import { NumeroEnCarrito } from "../numerocarritocontexto/contextocarrito";
import "../cart/cart.css"

export const Cart=()=>{
    const {cartItems}=useContext(NumeroEnCarrito)
    const {countWidget}=useContext(NumeroEnCarrito)
    const {removeItems}=useContext(NumeroEnCarrito)
    const {precioTotal}=useContext(NumeroEnCarrito)
    const {AddInCart}=useContext(NumeroEnCarrito)
    const {RestInCart}=useContext(NumeroEnCarrito)
    console.log(cartItems)
    
    /* const totalCarrito=(precioItem, cantidad)=>{
        setPrecioTotal(precioTotal+(precioItem * cantidad))
    } */
    /* const precioTotalfunction = (prod)=>{
        setPrecioTotal(precioTotal=precioTotal+(prod.price*prod.numeroAPasar))
        
    } */

    return(
   <>
  
   <div className="container">
  
 <div className="row contenedorCart">
 <div className="col-8 d-flex">
     
     <div className="container-fluid">
     <h2 className="tituloCarritoDeCompras">CARRITO DE COMPRAS</h2>


    {cartItems.length === 0 ? (<h2>Carrito vacío..</h2>) :
    
    
    
    (
        
        cartItems.map((prod)=>{
            
            return(
            
                
            <div className="card fila-producto-carro"> 

              <img className="imagenes-carrito" src={prod.ruta} ></img>
              <p className="name-carro">{prod.name}</p>
              <div className="CountCart">
              <div className="d-flex align-items-center"><button className="addAndRest" onClick={()=>RestInCart(prod)}>-</button></div>
              <p className="cant-carro">Cantidad: {prod.numeroAPasar}</p>
              <div className="d-flex align-items-center" ><button className="addAndRest" onClick={()=>AddInCart(prod)}>+</button></div>
              </div>
              <p className="precio-carro">Total: ${(prod.price*prod.numeroAPasar)}</p>
              <div className="contenedor-remove-item">
              <a className="remove-carrito" onClick={()=>removeItems(prod)}><img className="icono-carrito" src="https://i.postimg.cc/W4mfSXpL/eliminar.png"></img></a></div>
              </div>)}))}
              </div>
              
            </div>

            <div className="col-4">
<h2 className="titulo-fact">FACTURACION Y ENVIO</h2>

                <div >
            <div class="input-group mb-3 formulario-compra">
  <span class="input-group-text" id="basic-addon1">Nombre y apellido</span>
  <input type="text" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input></div>
 </div>
 <div >
            <div class="input-group mb-3 formulario-compra">
  <span class="input-group-text" id="basic-addon1">Dirección</span>
  <input type="text" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input></div>
 </div>
 <div >
            <div class="input-group mb-3 formulario-compra">
  <span class="input-group-text" id="basic-addon1">Número de teléfono</span>
  <input type="text" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input></div>
 </div>
 <div >
            <div class="input-group mb-3 formulario-compra">
  <input type="text" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input>
  <span class="input-group-text" id="basic-addon1">@gmail.com</span>
  </div>
  </div>
  <div >
            <div class="input-group mb-3 formulario-compra">
  <span class="input-group-text" id="basic-addon1">Número de Tarjeta</span>
  <input type="text" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input></div>
 </div>         
 <div >
            <div class="input-group mb-3 formulario-compra">
  <span class="input-group-text" id="basic-addon1">DNI titular</span>
  <input type="text" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input></div>
 </div>
 <div >
            <div class="input-group mb-3 formulario-compra">
  <span class="input-group-text" id="basic-addon1">Código de seguridad</span>
  <input type="text" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input></div>
 </div>
 <div className="d-flex justify-content-center">
 <p className="totalCarrete">Total carrito: <span style={{color: "rgb(47, 102, 76"}}>${precioTotal}</span></p>
 </div>
 <div className="d-flex justify-content-center">

 <button className="buton">FINALIZAR COMPRA</button></div>


            </div>

            </div>
            
           
        
        
       

           </div>
            
    </>
)
}