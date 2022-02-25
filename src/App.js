
import './App.css';
import NavBar from './components/navBar/navbar.js';
import {ItemListContainer} from "./components/itemListContainer/ItemListContainer"
import {ItemCount} from './components/itemCount/itemCount';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import {Home}  from './components/Home/Home';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailCointainer';
import { Footer } from './components/footer/footer';
function App() {
  return (
    <BrowserRouter>
     <NavBar> 
      
     </NavBar>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/detalles/:id" element={<ItemDetailContainer/>} />
       <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
     </Routes>
     <Footer></Footer>
     </BrowserRouter>
  );
}

export default App;
