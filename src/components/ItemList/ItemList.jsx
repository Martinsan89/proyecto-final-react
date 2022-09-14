import Item from "../Item/Item"
import ItemDetailContainer from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'


const ItemList = ({products}) => {
  
  return (
    <div style={{display:'flex', justifyContent:'center', marginTop:'2rem', flexWrap:'wrap', gap:'10px'}}>
      {products.map((product) => (
        <div key={product.id} style={{width:'20%', border:'1px solid'}}>
        <Link  to={'/item/' + product.id} style={{textDecoration:'none'}}>
          <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}} key={product.id}>
            <Item title={product.title} 
            price={product.price}
            image={product.image} instrument={product.category} />
          </div>
        </Link>  
        </div>
      ))}
    </div>
  )
}

export default ItemList
