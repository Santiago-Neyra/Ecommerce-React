import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
     <Header/>
     <ItemListContainer greeting="Productos destacados:" />
    </div>
  );
}

export default App;
