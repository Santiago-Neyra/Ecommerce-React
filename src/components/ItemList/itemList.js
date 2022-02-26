import { Item } from "../item/item"
export const ItemList = ({productos, categoriaId})=>{
    const productosIntel= productos.filter(elemento=>elemento.marca==="intel")
    const productosAmd= productos.filter(elemento=>elemento.marca==="amd")
    let categoria=categoriaId;
    console.log(categoria)
    
    

    if (categoriaId==="amd"){
        return(
            <Item productos={productosAmd} ></Item>
            
        )
    }
    if (categoriaId==="intel"){
        return(
            <Item productos={productosIntel} ></Item>
            
        )
    }
    else{
        return(
            <Item productos={productos} ></Item>
            
        )
    }

}
    