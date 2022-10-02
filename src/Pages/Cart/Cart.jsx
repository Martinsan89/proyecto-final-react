import {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import styles from '../../Pages/Cart/Cart.module.css'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import moment from 'moment'

const Cart = () => {
  const {cart, deleteCart, removeToCart, setCart, setCounter} = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [idCompra, setIdCompra] = useState('')

  const createOrder =() => {
    const db = getFirestore();
    const order = {
      buyer: {
        name: "Ramiro",
        phone: "1234123",
        email: 'q@q.com'
      },
      items: cart,
      total: total,
      date: moment().format()
    };
    const query = collection(db, 'orders');
    addDoc(query,order)
    .then(({id}) => setIdCompra(id))
    .catch(err => console.log(err));

  }
  useEffect(()=>{
    setTotal(cart.reduce((acc, i) => {
      return acc += (i.item.price * i.quantity)}, 0))
  },[cart])  

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1 style={{textAlign:'center', marginTop:'1rem'}}>Cart of mallets! </h1>
      {cart.length === 0 ? (
        <>
          <h2 style={{textAlign:'center', marginTop:'2rem'}}>Add mallets to the cart</h2>
          <Link to={"/"} className={`${styles.btnStore}`}>Back to the store</Link>
        </>
        ) : (
        <>
          <div style={{display:'flex', justifyContent:'center', marginTop:"2rem"}}>
            <table cellSpacing={25}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Model</th>
                  <th>Id</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
            <tbody>
              {cart.map((i) => (
                <tr key={i.item.model}>
                  <td>{i.item.title}</td>
                  <td>{i.item.model}</td>
                  <td>{i.item.id}</td>
                  <td style={{textAlign:'center'}}>
                    {i.quantity}
                  </td>
                  <td>$ {i.item.price}</td>
                  <td>$ {i.item.price * i.quantity}</td>
                  <td>
                    <button onClick={()=>removeToCart(i.item.id)}>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot style={{paddingTop:'1rem'}}>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>${total}</td>
              </tr>
            </tfoot>

            </table>
          </div>   
          <div style={{display:'flex', justifyContent:'space-between', width:'44%'}}>
            <div style={{width:'100%', margin:'auto'}}>
              <button  onClick={()=>deleteCart()} className={`${styles.btnStore}`}>Delete Cart</button>
            </div>
            <div style={{width:'100%', margin:'auto'}}>
              <button  onClick={createOrder} className={`${styles.btnStore}`}>Buy mallets</button>
            </div>

          </div>
          {idCompra != '' && 
          <div style={{marginTop:'3rem', width:'40%'}}>
            <div style={{border:'1px solid', padding:'1rem'}}>
              <h2 style={{textAlign:'center'}}>Purchase of products made</h2>
              <div className={`${styles.compraRealizada}`}>
                <h3>Purchase Id </h3>
                <p style={{margin:'1rem 0'}}>{idCompra} </p>
              </div>
            </div>
              <Link to={"/"} className={`${styles.btnStore}`} onClick={()=>{setCart([]), setCounter(0)}}>Start a new pruchase</Link>
          </div> }
        </>
      ) }
    </div>
  )
}

export default Cart
