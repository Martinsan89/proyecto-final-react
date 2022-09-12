import { useState } from "react";
import styles from '../ItemCount/ItemCount.module.css'


const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(0);
    
    const increment = () => {
      counter < stock && setCounter(counter + 1) 
    }
    const decrement = () => {
      counter > 0 && setCounter(counter - 1);
    }
     
  return (
    <div style={{width:'100%', paddingTop:'5rem'}}>
        {stock >=1 ? 
        <div>
            <div>
                <div className={`${styles.stock}`}>
                    <p>Stock</p>
                    <p>{stock} disponible</p>
                </div>
                <div className={`${styles.counter}`}>
                    <button className={`${styles.btnCounter}`}  onClick={increment}>+</button>
                    <p style={{fontSize:'1.5rem'}}>{counter} </p>
                    <button className={`${styles.btnCounter}`} onClick={decrement}>-</button>
                </div>
            </div>
            <div className={`${styles.AddCart}`}>
                <button className={`${styles.btnAddCart}`} >Agregar al carrito</button>
            </div>
        </div> : <p className={`${styles.stock}`}>No hay stock disponible</p>
        }

    </div>
  )
}

export default ItemCount
