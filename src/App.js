
import './App.css';
import NavBar from './components/navbar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/itemCount';
function App() {
  return (
    <div className="App">
     <NavBar> 
      
     </NavBar>
     <ItemListContainer greeting="Productos destacados:" />
     
    </div>
  );
}

export default App;
