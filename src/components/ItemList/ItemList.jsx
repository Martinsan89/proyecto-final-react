import Item from "../Item/Item"
import {Link} from 'react-router-dom'


const ItemList = ({products}) => {
  
  return (
    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'10px', padding:'1rem'}}>
      {products.map((product) => (
        <div key={product.id} style={{width:'20%', border:'1px solid'}}>
        <Link  to={'/item/' + product.id} style={{textDecoration:'none'}}>
          <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Item title={product.title}
            price={product.price} model={product.model}
            image={product.image} instrument={product.category} />
          </div>
        </Link>  
        </div>
      ))}
    </div>
  )
}

export default ItemList
