import { useState } from 'react'
import AddProduct from './AddProduct'
import reactLogo from './assets/react.svg'
import GetProductData from './GetProductData'
import UpdateData from './UpdateData'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AddProduct />
      <GetProductData />
    </div>
  )
}

export default App
