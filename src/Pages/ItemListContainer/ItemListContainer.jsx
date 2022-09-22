import ItemList from "../../components/ItemList/ItemList"
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
    },1000)
  })
  return (
    <div>
      <div style={{margin:'auto', width:'40%', marginTop:'2rem', backgroundColor:'lightgray'}}>
        <h3 style={{textAlign:'center'}}>{greetins}</h3>
      </div>
      {products.length > 0 ? 
      <ItemList products={products}/>
      : <p style={{textAlign:'center', fontSize:'20px', marginTop:'1rem'}}>Loading ...</p>
      }
    </div>
  )
}

export default ItemListContainer
