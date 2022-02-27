import {ItemCount} from "../itemCount/itemCount";
import {Link} from 'react-router-dom'
export const Item= ({greeting, productos})=>{
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
         {productos.map((elemento)=>
         
            
         <div  className="carta col-3" key={elemento.id}>
             

             <div>
                 
                 <img className="img-producto img-fluid" src={elemento.ruta} alt="Producto" /> 
                 <h2 className="nombre-producto">{elemento.name}</h2>
                <p>{elemento.description}</p>
            <Link className="link-detalle" to={"/detalles/"+( parseInt(elemento.id))}><button className="detalle">VER DETALLE +</button></Link>
                <h4 className="precio-categorias">Precio contado: ${elemento.price}</h4>
                <p style={fstock(elemento.stock)} className="stock">stock: {elemento.stock}</p>
                <ItemCount stock={elemento.stock} initial={1} />
             </div>
             
             </div>)}
         </div>
        
        
         
        </div>
)

}