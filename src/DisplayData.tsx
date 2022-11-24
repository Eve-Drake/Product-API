import React from 'react'
import ProductInterface from './ProductInterface'

interface Props{
    product: ProductInterface;
}

const DisplayData = ({product} : Props) => {
  return (
    <span className='product-grid'>
        <div>
            <img className='product-image'src={product.thumbnail} alt={product.description}/>
        </div>
        <div>
            <h1>{product.title}</h1>
            <h2>£{product.price}</h2>
            <p>{product.description}</p>
        </div>
        <div>
          <p>{product.rating}</p>
        </div>
    </span>
  )
}

export default DisplayData