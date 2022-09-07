import styles from '../ItemDetail/ItemDetail.module.css'

const ItemDetail = ({product}) => {
  return (
    <div className={`${styles.cardBox}`}>
          <div className={`${styles.cardDiv}`}>
            <div className={`${styles.cardBody}`}>
                <img style={{width:'40%'}} src={product.image} alt='imagen' />
              <div className={`${styles.cardTitle}`}>
                <h4></h4>
                <p style={{textAlign:'center'}}>Marca: {product.title}</p>
                <p style={{marginTop:'2rem'}}>Precio: ${product.price}</p>
                <p style={{marginTop:'2rem'}}>Peso: {product.weight}</p>
                <p style={{marginTop:'2rem'}}>Instrumento: {product.instrument}</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ItemDetail
