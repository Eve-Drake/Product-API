import React, { useEffect } from 'react'

interface Props{
    setCategoriesArray: React.Dispatch<React.SetStateAction<string[]>>
}

const GetCategories = ({setCategoriesArray} : Props) => {
    const fetchCategories =()=>{
        try{
            fetch('https://dummyjson.com/products/categories')
            .then(data => data.json())
            .then((data) =>{
                setCategoriesArray(data)
            })
        }
        catch (err){
            console.error(err)
        }
        
        
    }

    useEffect(() =>{
       fetchCategories() 
    },[])
  return (null)
}

export default GetCategories