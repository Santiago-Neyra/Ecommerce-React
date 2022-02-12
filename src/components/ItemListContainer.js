import Lista from "./elementos.json"
import ItemCount from "./itemCount";
function ItemListContainer({greeting}) {
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
 {Lista.map((elemento)=> <div  className="carta col-3" key={elemento.id}>
     

     <div>
         <h2>{elemento.name}</h2>
         <img src={elemento.ruta} alt="Producto" /> 
        <p>{elemento.description}</p>
        <button className="detalle">VER DETALLE +</button>
        <h4>Precio contado: ${elemento.price}</h4>
        <p style={fstock(elemento.stock)} className="stock">stock: {elemento.stock}</p>
        <ItemCount stock={elemento.stock} initial={1} />
     </div>
     
     </div>)}
 </div>



</div>
)

}
export default ItemListContainer;