import {useContext} from 'react'
import shoppingCart from '../../assets/Cart/shoppingCart.svg'
import styles from '../CartWidget/CartWidget.module.css'
import {CartContext} from '../../context/CartContext'
import { NavLink } from 'react-router-dom'


const CartWidget = () => {
  const {counter} = useContext(CartContext)
  return (
    <>
    {counter > 0 && <NavLink to={'/cart'} className={`${styles.cartDiv}`}>
        <p className={`${styles.cartCounter}`}>{counter}</p>
        <img src={shoppingCart} alt="shoppingCart" />
      </NavLink >}
    </>
  )
}

export default CartWidget
