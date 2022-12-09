import React from 'react'
import ProductInterface from '../ProductInterface'
import DisplayData from './DisplayData'

interface Props{
    products: ProductInterface[],
    activeProductCategory: string
}

const AllProductsDisplay = ({products, activeProductCategory}: Props) => {
  return (
    <>
        {activeProductCategory}
        <div className='products-display-grid'>
        {products.map((product)=>(
          <div key={product.id}>
            <DisplayData product={product} />
          </div>
        ))}
      </div>
    </>
  )
}

export default AllProductsDisplay