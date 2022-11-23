import React from 'react'
import ProductInterface from './ProductInterface'

interface Props{
    product: ProductInterface;
}

const DisplayData = ({product} : Props) => {
  return (
    <div className='productPreview'>
        <div className='image'>
            <img src={product.thumbnail} alt={product.description}/>
        </div>
        <div className='productInfo'>
            <h1>{product.title}</h1>
            <h2>£{product.price}</h2>
            <p>{product.description}</p>
            <p>{product.rating}</p>
        </div>

    </div>
  )
}

export default DisplayData