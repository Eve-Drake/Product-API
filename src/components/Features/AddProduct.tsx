import React, { useState } from 'react';

const AddProduct = () => {
    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          title: {title},
        })
      })
      .then(result => result.json())

      //TODO: This API is simuled so once the response has gone through, I add it manually 
      .then(console.log)
    }

  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <label htmlFor='title'>Title: </label>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <label htmlFor='title'>Description: </label>
        <input value={description} onChange={(e)=>setDescription(e.target.value)}/>
      <label htmlFor='title'>Price: </label>
        <input value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <button type='submit' >Submit</button>
    </form>

  )
}

export default AddProduct