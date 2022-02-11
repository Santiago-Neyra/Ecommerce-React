
import './App.css';
import Header from './components/header.js';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/itemCount';
function App() {
  return (
    <div className="App">
     <Header> 
      
     </Header>
     <ItemListContainer greeting="Productos destacados:" />
     <ItemCount stock="5" initial={1} />
    </div>
  );
}

export default App;
