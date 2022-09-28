import ItemDetail from "../../components/ItemDetail/ItemDetail"
// import {ProductList} from '../../Data/ProductList'
import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import {getFirestore, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = ({greetins}) => {

  const {id} = useParams();
  const [producto, setProduct] = useState([])
  const db = getFirestore();
  
  const getProduct = ()=>{
    const queryDoc = doc(db, 'items', id)
    getDoc(queryDoc)
    .then ((res) => {setProduct({id: id, ...res.data()})})
    
    .catch(err => console.log(err)) 
  }

  useEffect(() => {
   getProduct()
  }, [id])

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

