import ItemList from "../../components/ItemList/ItemList"
// import {ProductList} from '../../Data/ProductList'
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection, query } from "firebase/firestore"


const ItemListContainer = ({greetins}) => {
  const [products, setProducts] = useState([])
  const {category} = useParams ();
  // console.log(category)

  const getProducts = (()=>{
    const db = getFirestore();
    const querySnapshot =  collection(db, 'items')
    
    if(category) {
      const queryFilter = query(querySnapshot, where ('category', '==', category))
      getDocs(queryFilter)
      .then(resp => {
        const data = resp.docs.map((doc) => {
          return {id:doc.id, ...doc.data()};
        });
        setProducts(data)
        // console.log(data)
      })
      .catch(err => console.log(err))
    } else {
      getDocs(querySnapshot)
      .then(resp => {
        const data = resp.docs.map((doc) => {
          return {id:doc.id, ...doc.data()};
        });
        setProducts(data)
      })
      .catch(err => console.log(err))
    }
  })

  useEffect(() => {
    getProducts();
  }, [])
  return (
    <div style={{backgroundColor:'lightgrey'}}>
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
