import { Item } from "../item/item"
export const ItemList = ({productos, categoriaId})=>{
    const productosIntel= productos.filter(elemento=>elemento.marca==="intel")
    const productosAmd= productos.filter(elemento=>elemento.marca==="amd")
    

    if (categoriaId==="amd"){
        return(

            <Item productos={productosAmd} greeting="Productos AMD" ></Item>
            
        )
    }
    if (categoriaId==="intel"){
        return(
            <Item productos={productosIntel} greeting="Productos INTEL"></Item>
            
        )
    }
    else{
        return(
            <Item productos={productos} greeting="Nuestros productos" ></Item>
            
        )
    }

}
    