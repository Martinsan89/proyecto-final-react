import styles from '../Navbar/Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo/malletsLogo.jpeg'


function Navbar() {
  return (
    <nav className={`${styles.navBar}`}>
      <div className={`${styles.brandBox}`}>
        <a className={`${styles.brandLogo}`} href="#">
          <h1>Mallets Shop</h1>
          <img style={{width:'33%'}} src={logo} alt="logo" />
        </a>
      </div>
      <div className={`${styles.tagsDiv}`}>
        <ul className={`${styles.tagsUl}`}>
          <li className={`${styles.tagsLi}`}>Vibrafono</li>
          <li className={`${styles.tagsLi}`}>Marimba</li>
          <li className={`${styles.tagsLi}`}>Xilophone</li>
          <li className={`${styles.tagsLi}`}>Glockenspield</li>
        </ul>
      </div>
      <div>
      </div>
      <CartWidget />
    </nav>
  )
}

export default Navbar
