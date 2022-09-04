import ItemList from "../ItemList/ItemList"
import {ProductList} from '../../Data/ProductList'
import {useState, useEffect} from 'react'


const ItemListContainer = ({greetins}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    List.then((data) => {
      setProducts(data)
    }).catch((error) => console.log(error))
  }, [])

  const List = new Promise((resolve)=>{
    setTimeout(() => {
      resolve(ProductList)
    },2000)
  })
  
  return (
    <div>
      <div style={{margin:'auto', width:'40%', marginTop:'2rem', backgroundColor:'lightgray'}}>
        <h3 style={{textAlign:'center'}}>{greetins}</h3>
      </div>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
