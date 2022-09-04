import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"



const ItemList = ({products}) => {
  
  return (
    <div style={{display:'flex', justifyContent:'center', marginTop:'2rem'}}>
        {products.map((product) => (
          <div style={{width:'20%'}} key={product.id}>
            <Item title={product.title} 
            price={product.price}
            image={product.image} />
              <ItemCount
              stock={product.stock} />
          </div>
        ))}
      
    </div>
  )
}

export default ItemList
