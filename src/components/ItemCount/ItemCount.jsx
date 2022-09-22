import styles from '../ItemCount/ItemCount.module.css'

const ItemCount = ({ quantity, setQuantity, stock}) => {
  
  const increment = () => {
    quantity < stock && setQuantity(quantity + 1)
  }
  const decrement = () => {
    quantity > 0 && setQuantity(quantity - 1)
  }
     
  return (
    <div style={{width:'100%', paddingTop:'5rem'}}>
      {stock ?    
        <div>
            <div>
                <div className={`${styles.stock}`}>
                    <p>Stock</p>
                    <p>{stock} disponible</p>
                </div>
                <div className={`${styles.counter}`}>
                    <button className={`${styles.btnCounter}`}  onClick={increment}>+</button>
                    <h5 style={{fontSize:'1.5rem'}}>{quantity}</h5>
                    <button className={`${styles.btnCounter}`} onClick={decrement}>-</button>
                </div>
            </div>
            
        </div> 
         : <p className={`${styles.stock}`}>No hay stock disponible</p>
      }
      

    </div>
  )
}

export default ItemCount
