import React, { useEffect, useState } from 'react'
import DisplayData from '../UI/DisplayData';
import ProductInterface from '../ProductInterface'

interface Props {
  setProducts : React.Dispatch<React.SetStateAction<ProductInterface[]>>;
  products: ProductInterface[];
}
const GetProductData = ({setProducts, products}: Props) => {

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

  return (null)
}

export default GetProductData