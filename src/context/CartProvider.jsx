import { CartContext } from './CartContext'
import { useState } from 'react'

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [counter, setCounter] = useState(0)

    const addToCart = (item, quantity) => {
      const isInCart = cart.find((i) => i.item.id == item.id);
      setCounter(quantity)

      if(isInCart){
        setCounter(isInCart.quantity += quantity);
        setCart([...cart])
      }else {
        setCart([...cart, {item, quantity}])
      }
      counter && setCounter(counter + quantity)
    }

    const removeToCart = (productId) => {
      let newCart = [];
      cart.forEach((i) => {
        if (i.item.id !== productId) {
          newCart.push(i);
        }
        setCart(newCart);
        setCounter(newCart.reduce((acc, i) => {
          return acc += i.quantity
        },0))
      })
    }

    const deleteCart = () => {
      setCart([]);
      setCounter(0);
    }

  return (
    <CartContext.Provider value={{cart, counter, setCart, addToCart, deleteCart, removeToCart}}>
      {children}
    </CartContext.Provider>
  ) 
}