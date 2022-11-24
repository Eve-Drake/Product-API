import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      console.log('Click')
    }

  return (
    <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <input value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <button type='submit' >Submit</button>
    </form>

  )
}

export default AddProduct