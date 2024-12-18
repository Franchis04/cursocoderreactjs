import ItemListContainer from "./ItemListContainer"
import Item from "./Item"
import "./ItemList.css"

const ItemList = ({products}) => {
  return (
    <div>
    {
      products.map((product) => (
       <Item product = {product} key = {product.id}/>
      ))
    }
</div>
  )
}

export default ItemList