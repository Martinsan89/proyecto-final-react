import styles from '../Navbar/Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo/malletsLogo.jpeg'
import {NavLink, Link} from 'react-router-dom'


function Navbar() {
  return (
    <nav className={`${styles.navBar}`}>
      <div className={`${styles.brandBox}`}>
        <NavLink to='/' className={`${styles.brandLogo}`} href="#">
          <h1>Mallets Shop</h1>
          <img style={{width:'33%'}} src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className={`${styles.tagsDiv}`}>
        <ul className={`${styles.tagsUl}`}>
          <NavLink to ={'/category/' + 'vibraphone'} className={`${styles.tagsLi}`}
          style={({isActive}) => 
            isActive ? 
            {textDecoration:'none', backgroundColor:'black', color:'white'}
            : {textDecoration:'none'}
          }>Vibraphone</NavLink>
          <NavLink to ={'/category/' + 'marimba'} className={`${styles.tagsLi}`}
          style={({isActive}) => 
          isActive ? 
          {textDecoration:'none', backgroundColor:'black', color:'white'}
          : {textDecoration:'none'}
        }>Marimba</NavLink>
          <NavLink to ={'/category/' + 'xylophone'} className={`${styles.tagsLi}`}style={({isActive}) => 
            isActive ? 
            {textDecoration:'none', backgroundColor:'black', color:'white'}
            : {textDecoration:'none'}
          }>Xylophone</NavLink>
        </ul>
      </div>
      <div>
      </div>
        <CartWidget />
    </nav>
  )
}

export default Navbar
