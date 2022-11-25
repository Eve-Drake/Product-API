import React, {useEffect, useState} from 'react'

const SetCateogories = () => {
    const [categories, SetCateogories] = useState<string>('')

    const getCategories = () =>{
      fetch('https://dummyjson.com/products/categories')
      .then((response)=> response.json())
      .then((data) =>{
        SetCateogories(data)
      })
    }

    useEffect(()=>{
      getCategories();
    },[])
  return (
    <select></select>
  )
}

export default SetCateogories