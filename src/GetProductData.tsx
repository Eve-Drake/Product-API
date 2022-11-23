import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DisplayData from './DisplayData';
import ProductInterface from './ProductInterface'


const GetProductData = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const getProducts = async () =>{
    try{
      const response =  await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
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