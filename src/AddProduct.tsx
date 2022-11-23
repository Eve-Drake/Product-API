import React, { useState } from 'react'

const AddProduct = () => {
    const [title, setTitle] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <input value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <input type='submit' value='Submit'/>
    </form>

  )
}

export default AddProduct