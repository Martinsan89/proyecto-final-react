import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
// import {ProductList} from '../../Data/ProductList'
import ItemList from '../../components/ItemList/ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


const Category = () => {
    const {category} = useParams();
    // console.log(category)
    const [productos, setProducts] = useState([]);
    // console.log(productos)

    const getProducts = (()=>{
      const db = getFirestore();
      const querySnapshot =  collection(db, 'items')
      
      if(category) {
        const queryFilter = query(querySnapshot, where ('category', '==', category))
        // console.log(queryFilter)
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
      getProducts()
    },[category])


  return (
    <div style={{marginTop:'1rem'}}>
      <h1 style={{textAlign:'center'}}>Mallets for {category}</h1>
      {productos && <ItemList products={productos} />}
      
    </div>
  )
}

export default Category
