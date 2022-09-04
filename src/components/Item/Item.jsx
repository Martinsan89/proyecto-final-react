import styles from '../Item/Item.module.css'

const Item = ({title, price, image}) => {

  return (
    <div className={`${styles.cardBox}`}>
          <div className={`${styles.cardDiv}`}>
            <div className={`${styles.cardBody}`}>
                <img style={{width:'40%'}} src={image} alt='imagen' />
              <div className={`${styles.cardTitle}`}>
                <p style={{textAlign:'center'}}>{title}</p>
                <p style={{marginTop:'2rem'}}>${price}</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Item
