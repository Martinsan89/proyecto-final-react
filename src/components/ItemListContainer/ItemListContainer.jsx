import React, {useState} from 'react'
import { ProductList } from '../../Data/ProductList';
import styles from '../ItemListContainer/ItemListContainer.module.css'

const ItemListContainer = ({marca}) => {

  const [counter, setCounter] = useState(0);
    const increment = () => {
      setCounter(counter + 1)
    }
    const decrement = () => {
      setCounter(counter - 1)
    }
  return (
    <div className={`${styles.cardBox}`}>
      {ProductList.map(product => {
        return (
          <div className={`${styles.cardDiv}`} key={product.id}>
            <h2 style={{marginTop:'1rem'}}>{marca}</h2>
            <div className={`${styles.cardBody}`}>
              <div className={`${styles.cardTitle}`}>
                <p style={{textAlign:'center'}}>{product.titulo}</p>
                <p style={{marginTop:'2rem'}}>${product.precio}</p>
              </div>
              <div className={`${styles.counterDiv}`}>
                <button onClick={increment}>+</button>
                <p>{counter}</p>
                <button onClick={decrement}>-</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ItemListContainer
