
import './App.css';
import NavBar from './components/navbar.js';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemCount} from './components/itemCount';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import {Home}  from './components/Home/Home';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailCointainer';
import { Footer } from './components/footer';
function App() {
  return (
    <BrowserRouter>
     <NavBar> 
      
     </NavBar>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/detalles/:id" element={<ItemDetailContainer/>} />
     </Routes>
     <Footer></Footer>
     </BrowserRouter>
  );
}

export default App;
