import React from 'react'

const DeleteProduct = () => {

  //temp id
  const id = 4

  const handleDelete = () =>{
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE'
    })
    .then((result) => result.json())
    .then(console.log)
  }
  return (
    <div>DeleteProduct</div>
  )
}

export default DeleteProduct