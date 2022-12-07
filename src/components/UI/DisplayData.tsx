import React from 'react'
import ProductInterface from '../ProductInterface'

interface Props{
    product: ProductInterface;
}

const DisplayData = ({product} : Props) => {
  return (
    <div className='product-grid'>
        <div className='grid-row-span-3'>
            <img className='product-image'src={product.thumbnail} alt={product.description}/>
        </div>
        <div>
            <h2>{product.title}</h2>
            <h3>£{product.price}</h3>
        </div>
        
          
        
    </div>
  )
}

export default DisplayData