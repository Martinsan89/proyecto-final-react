import { NavLink } from 'react-router-dom'
import styles from '../ItemCount/ItemCount.module.css'


const ItemCount = ({ setCount, count, stock}) => {
    
  const increment = () => {
    count < stock && setCount(count + 1)
  }

  const decrement = () => {
    count > 0 && setCount(count - 1)
  }
     
  return (
    <div style={{width:'100%', paddingTop:'5rem'}}>
         
        <div>
            <div>
                <div className={`${styles.stock}`}>
                    <p>Stock</p>
                    <p>{stock} disponible</p>
                </div>
                <div className={`${styles.counter}`}>
                    <button className={`${styles.btnCounter}`}  onClick={increment}>+</button>
                    <h5 style={{fontSize:'1.5rem'}}>{count}</h5>
                    <button className={`${styles.btnCounter}`} onClick={decrement}>-</button>
                </div>
            </div>
            <div className={`${styles.AddCart}`}>
                <NavLink to='/cart' className={`${styles.btnAddCart}`}>Cart of Mallets</NavLink>
            </div>
        </div> 
        {/* : <p className={`${styles.stock}`}>No hay stock disponible</p> */}
      

    </div>
  )
}

export default ItemCount
