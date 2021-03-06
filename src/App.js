import React from 'react';
import './App.css';
import NavBar from './components/navBar/navbar.js';
import {ItemListContainer} from "./components/itemListContainer/ItemListContainer"
import {ItemCount} from './components/itemCount/itemCount';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import {Home}  from './components/Home/Home';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailCointainer';
import { Footer } from './components/footer/footer';
import { CartProvider, NumeroEnCarrito } from './components/numerocarritocontexto/contextocarrito';
import {Cart} from "./components/cart/cart"
import {Nosotros} from "./components/nosotros/nosotros"
import { PedidoTomado } from './components/pedidotomado/pedidoTomado.js';
function App() {
 
 
 
  return (
    
    <BrowserRouter>
     <CartProvider>
     <NavBar> 
      
     </NavBar>
     
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/detalles/:id" element={<ItemDetailContainer/>} />
       <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
       <Route path="/cart" element={<Cart/>} />
       <Route path='/nosotros' element={<Nosotros/>}/>
       <Route path="/finalizado" element={<PedidoTomado/>}/>
     </Routes>
     <Footer></Footer>
     </CartProvider>
     </BrowserRouter>
  );
}

export default App;
