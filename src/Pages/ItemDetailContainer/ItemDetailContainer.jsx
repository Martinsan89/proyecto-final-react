import ItemDetail from "../../components/ItemDetail/ItemDetail"
import {ProductList} from '../../Data/ProductList'
import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'


const ItemDetailContainer = ({greetins}) => {

  const {id} = useParams();

  const [producto, setProduct] = useState([])

  const List = new Promise ((resolve)=>{
    setTimeout(() => {
      resolve(ProductList);
      },1000)
  })

  useEffect(() => {
    List.then((resp) => {
      const data = resp.filter((e) => e.id == id);
      setProduct(data[0])
    })
  }, [])

  return (
    <div>
        <h2 style={{textAlign:'center', marginTop:'2rem' }}>Item Details</h2>
      <div style={{margin:'auto', width:'40%', marginTop:'2rem', backgroundColor:'lightgray'}}>
        <h3 style={{textAlign:'center'}}>{greetins}</h3>
      </div>
      {producto && <ItemDetail product={producto}/>}
      
    </div>
  )
}

export default ItemDetailContainer

