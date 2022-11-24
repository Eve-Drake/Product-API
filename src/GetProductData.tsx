import React, { useEffect, useState } from 'react'
import DisplayData from './DisplayData';
import ProductInterface from './ProductInterface'


const GetProductData = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const getProducts = () =>{
    try{
      fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data)=>{
        setProducts(data.products)
      })
    }
    catch(err : any){
      if(err.response){
        console.error(err.response);
      }
      else{
        console.error(err);
      }
    }
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div>
    {products.map((product)=>(
        <div key={product.id}>
          <DisplayData product={product} />
        </div>
      ))}
    </div>
  )
}

export default GetProductData