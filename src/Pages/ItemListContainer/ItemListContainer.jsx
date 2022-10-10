import ItemList from "../../components/ItemList/ItemList"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection, query } from "firebase/firestore"
import styles from './ItemListContainer.module.css'


const ItemListContainer = ({greetins}) => {
  const [products, setProducts] = useState([])
  const {category} = useParams ();

  const getProducts = (()=>{
    const db = getFirestore();
    const queryBase = collection(db, 'items')
    const querySnapshot =  category ? query(query, where ('category', '==', category)) :    queryBase;
    
      getDocs(querySnapshot)
      .then(resp => {
        const data = resp.docs.map((doc) => {
          return {id:doc.id, ...doc.data()};
        });
        setProducts(data)
      })
      .catch(err => console.log(err))
  })

  useEffect(() => {
    getProducts();
  }, [])
  return (
    <div style={{backgroundColor:'lightgrey'}}>
      <div className={`${styles.title}`}>
        <h1>{greetins}</h1>
      </div>
      {products.length > 0 ? 
      <ItemList products={products}/>
      : <p className={`${styles.loading}`}>Loading ...</p>
      }
    </div>
  )
}

export default ItemListContainer
