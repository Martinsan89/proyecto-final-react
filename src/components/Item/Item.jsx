import styles from '../Item/Item.module.css'

const Item = ({title, price,model, image, instrument}) => {

  return (
    <div className={`${styles.cardBox}`}>
          <div className={`${styles.cardDiv}`}>
            <div className={`${styles.cardBody}`}>
                <img style={{width:'50%'}} src={image} alt='imagen' />
              <div className={`${styles.cardTitle}`}>
                <p style={{textAlign:'center'}}>{title}</p>
                <p style={{textAlign:'center', marginTop:"1rem"}}>{model}</p>
                <p style={{marginTop:'2rem'}}>${price}</p>
                <p style={{marginTop:'2rem'}}>Instrument: {instrument}</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Item
