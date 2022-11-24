import React from 'react'
import ProductInterface from './ProductInterface'
import StarRating from './StarRating';

interface Props{
    product: ProductInterface;
}

const DisplayData = ({product} : Props) => {
  return (
    <span className='product-grid'>
        <div className='grid-row-span-3'>
            <img className='product-image'src={product.thumbnail} alt={product.description}/>
        </div>
        <div>
            <h1>{product.title}</h1>
            <h2>£{product.price}</h2>
            <p>{product.description}</p>
        </div>
        <div className='grid-row-span-2'>
          <StarRating stars={product.rating}/>
        </div>
    </span>
  )
}

export default DisplayData