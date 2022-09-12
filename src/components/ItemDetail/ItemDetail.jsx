import styles from '../ItemDetail/ItemDetail.module.css'

const ItemDetail = ({product}) => {

  return (
    <>
    {product.id  ? 
      <div className={`${styles.cardBox}`}>
        <div className={`${styles.cardDiv}`}>
          <div className={`${styles.cardBody}`}>
            <img style={{width:'40%'}} src={product.image} alt='imagen' />
            <div className={`${styles.cardTitle}`}>
              <p style={{textAlign:'center'}}>Marca: {product.title}</p>
              <p style={{marginTop:'2rem'}}>Precio: ${product.price}</p>
              <p style={{marginTop:'2rem'}}>Peso: {product.weight}</p>
              <p style={{marginTop:'2rem'}}>Instrumento: {product.category}</p>
            </div>
          </div>
        </div>
      </div>
      : <p style={{textAlign:'center', fontSize:'20px'}}>Loading ...</p>
    }
    </>
  )
}

export default ItemDetail
