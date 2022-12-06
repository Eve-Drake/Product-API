import React, {useEffect, useState} from 'react'

const SetCateogories = () => {
    const [categories, SetCateogories] = useState<string>('')

    const getCategories = () =>{
      try{
        fetch('https://dummyjson.com/products/categories')
        .then((response)=> response.json())
        .then((data) =>{
          SetCateogories(data)
        })
      }
      catch(err){
        console.error(err)
      }
    }

    useEffect(()=>{
      getCategories();
    },[])
  return (
    <div></div>
  )
}

export default SetCateogories