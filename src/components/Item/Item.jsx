import styles from '../Item/Item.module.css'

const Item = ({title, price,model, image, instrument}) => {

  return (
    <div className={`${styles.cardBox}`}>
          <div className={`${styles.cardDiv}`}>
            <div className={`${styles.cardBody}`}>
                <img style={{width:'50%'}} src={image} alt='imagen' />
              <div className={`${styles.cardTitle}`}>
                <h4 style={{textAlign:'center'}}>{title}</h4>
                <h4 style={{textAlign:'center', marginTop:"1rem"}}>{model}</h4>
                <h4 style={{marginTop:'2rem'}}>${price}</h4>
                <h4 style={{marginTop:'2rem'}}>for: {instrument}</h4>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Item
