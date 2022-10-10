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
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setemail] = useState('')
  const [confirmEmail, setconfirmEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)

  const [order, setOrder] = useState({
    buyer: {
      name: '',
      phone: 0,
      email: '',
    },
    items: [],
    total: 0,
    date: moment().format('DD/MM/YYYY, h:mm:ss a')
  });

  const db = getFirestore();
  const query = collection(db, 'orders')

  const createOrder =(e) => {
    e.preventDefault();
    setErrorEmail(false);
    email != '' &&
    email == confirmEmail ?
    addDoc(query,order)
    .then(({id}) => setIdCompra(id))
    .catch(err => console.log(err)) :
    setErrorEmail(true)
  }
  useEffect(()=>{
    setTotal(cart.reduce((acc, i) => {
      return acc += (i.item.price * i.quantity)}, 0)),
      // actualiza la orden si hay algun cambio en el cart
    setOrder({
      buyer: {name:name, phone:phone, email:email},
      items: cart,
      total: cart.reduce((acc, i) => {
      return acc += (i.item.price * i.quantity)}, 0),
      date: moment().format('DD/MM/YYYY, h:mm:ss a')
    })
  },[cart, name, phone, email])  

  return (
    <div className={`${styles.cart}`}>
      <h1 style={{textAlign:'center', marginTop:'1rem'}}>Cart of mallets! </h1>
      {cart.length === 0 ? (
        <>
          <h2 style={{textAlign:'center', marginTop:'2rem'}}>Add mallets to the cart</h2>
          <Link to={"/"} className={`${styles.btnStore}`}>Back to the store</Link>
        </>
        ) : (
        <>
        <div style={{width:'40%', margin:'auto'}}>
              <button onClick={()=>deleteCart()} className={`${styles.btnDelete}`}>Delete Cart</button>
            </div>
          <div className={`${styles.table}`}>
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
          <div style={{border:'1px solid', padding:'1rem'}}>
            <h3 style={{marginBottom:'1rem'}}>Complete the form to finish</h3>
            <div style={{margin:'1rem 0'}}>
              <label style={{padding:'0 10px'}}>Name</label>
              <input name='name' type="text"  onChange={(e)=>setName(e.target.value)} />
            </div>
            <div style={{margin:'1rem 0'}}>
              <label style={{padding:'0 10px'}}>Phone</label>
              <input name='phone' type="number"  onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div style={{margin:'1rem 0'}}>
              <label style={{padding:'0 10px'}}>Email</label>
              <input name='email' type="email"  onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div style={{margin:'1rem 0'}}>
              <label style={{padding:'0 10px'}}>Confirm email</label>
              <input name='confirmEmail' type="email"  onChange={(e)=>setconfirmEmail(e.target.value)}/>
            </div>
            {errorEmail &&
            <div>
              <h4>Email doesn't match</h4>
            </div>
            }
            <div className={`${styles.btns}`}>
              {name != '' &&
                <div style={{width:'100%', margin:'auto'}}>
                  <button onClick={createOrder} className={`${styles.btnStore}`}>Buy mallets</button>
                </div>
              }
            </div>
          </div>
          {idCompra != '' && 
          <div style={{margin:'3rem', width:'40%'}}>
            <div style={{border:'1px solid', padding:'1rem'}}>
              <h2 style={{textAlign:'center'}}>Purchase of products made</h2>
              <div className={`${styles.compraRealizada}`}>
                <h3 style={{marginTop:'10px'}}>Purchase Id </h3>
                <p style={{margin:'1rem 0'}}>{idCompra} </p>
                <Link to={"/"} className={`${styles.btnNew}`} onClick={()=>{setCart([]), setCounter(0)}}>Start a new pruchase</Link>
              </div>
            </div>
            <div>
            </div>
              
          </div> }
        </>
      ) }
    </div>
  )
}

export default Cart
