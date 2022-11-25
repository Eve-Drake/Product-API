import { useState } from 'react'
import AddProduct from './componenets/AddProduct'
import GetProductData from './componenets/GetProductData'
import UpdateData from './UpdateData'


function App() {
  const [show, setShow]  =useState<boolean>(false)
  
  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>{(show ? 'Show' : 'Hide')}</button>
      <div className={(show? 'hide' : '')}>
        <AddProduct />
      </div>
      <GetProductData />
    </div>
  )
}

export default App
