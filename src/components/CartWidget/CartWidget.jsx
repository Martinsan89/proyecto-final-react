import React from 'react'
import shoppingCart from '../../assets/Cart/shoppingCart.svg'
import styles from '../CartWidget/CartWidget.module.css'

const CartWidget = () => {
  return (
    <div className={`${styles.cartDiv}`}>
      <p className={`${styles.cartCounter}`}>0</p>
      <img src={shoppingCart} alt="shoppingCart" />
    </div>
  )
}

export default CartWidget
