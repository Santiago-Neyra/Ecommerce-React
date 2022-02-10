import react from "react";

function ItemListContainer(props) {

return(
<div className="item-list">
<h1 className="palabra-greeting"> {props.greeting} </h1>
</div>
)

}
export default ItemListContainer;