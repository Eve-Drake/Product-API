import React, {useEffect, useState} from 'react'

const SetCateogories = () => {
    const [categories, setCateogories] = useState<string>('')

    const getCategories = () =>{
      try{
        fetch('https://dummyjson.com/products/categories')
        .then((response)=> response.json())
        .then((data) =>{
          setCateogories(data)
        })
      }
      catch(err){
        console.error(err)
      }
    }

    useEffect(()=>{
      getCategories();
    },[])
  return (null)
}

export default SetCateogories