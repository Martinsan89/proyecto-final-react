import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {ProductList} from '../../Data/ProductList'
import ItemList from '../../components/ItemList/ItemList';
import { useState } from 'react';


const Category = () => {
    const {categoryId} = useParams();
    const [productos, setProducts] = useState([]);

    useEffect(() => {
        const data = ProductList.filter((e) => e.category == categoryId);
        setProducts(data)

    },[categoryId])


  return (
    <div style={{marginTop:'1rem'}}>
      <h1 style={{textAlign:'center'}}>Mallets for {categoryId}</h1>
      {productos && <ItemList products={productos} />}
      
    </div>
  )
}

export default Category
