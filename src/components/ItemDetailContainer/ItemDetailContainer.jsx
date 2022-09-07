import ItemDetail from "../ItemDetail/ItemDetail"
import {ProductList} from '../../Data/ProductList'
import {useState, useEffect} from 'react'


const ItemDetailContainer = ({greetins}) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    List.then((data) => {
      setProduct(data[3])
    }).catch((error) => console.log(error))
  }, [])

  const List = new Promise((resolve)=>{
    setTimeout(() => {
      resolve(ProductList)
    },2000)
  })
  
  return (
    <div>
        <h2 style={{textAlign:'center', marginTop:'2rem' }}>Item Details</h2>
      <div style={{margin:'auto', width:'40%', marginTop:'2rem', backgroundColor:'lightgray'}}>
        <h3 style={{textAlign:'center'}}>{greetins}</h3>
      </div>
      <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer

