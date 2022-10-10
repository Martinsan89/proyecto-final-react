import styles from '../ItemDetail/ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import  {CartContext}  from '../../context/CartContext'
import { NavLink } from 'react-router-dom'

const ItemDetail = ({product}) => {

  const [quantity, setQuantity] = useState(0);
  const {addToCart} = useContext(CartContext);

  const onAdd = ({product}) => {
    addToCart(product, quantity)
  }

  return (
    <> 
      <div className={`${styles.cardBox}`}>
        <div className={`${styles.cardDiv}`}>
          <div className={`${styles.cardBody}`}>
            <img style={{width:'40%'}} src={product.image} alt='imagen' />
            <div className={`${styles.cardTitle}`}>
              <p style={{textAlign:'center'}}>Marca: {product.title}</p>
              <p style={{textAlign:'center', marginTop:'1rem'}}>Marca: {product.model}</p>
              <p style={{marginTop:'2rem'}}>Precio: ${product.price}</p>
              <p style={{marginTop:'2rem'}}>Peso: {product.weight}</p>
              <p style={{marginTop:'2rem'}}>Instrumento: {product.category}</p>
            </div>
          </div>
        </div>
        <ItemCount quantity={quantity} setQuantity={setQuantity} stock={product.stock}/>
        {quantity >=1 && <div className={`${styles.AddCart}`}>
          <NavLink to={'/cart'} className={`${styles.btnAddCart}`}
          onClick={(e)=>{e.preventDefault, onAdd({product})}}>Cart of Mallets</NavLink >
        </div>}
      </div>
    </>
  )
}

export default ItemDetail
