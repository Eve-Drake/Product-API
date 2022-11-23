import { printSourceLocation } from 'graphql'
import React, { useState } from 'react'

const AddProduct = () => {
    const [title, setTitle] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [description, setDescription] = useState<string>('')
    
    
    const handleSubmit = () =>{
        
    }
  return (
    <form onSubmit={handleSubmit()}>
        <input value={title} onChange={(e)=>setDescription(e.target.value)}/>
        <input />
        <input />
        <button type='submit'>Submit</button>
    </form>

  )
}

export default AddProduct