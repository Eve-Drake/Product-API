import { useState } from 'react'
import AddProduct from './componenets/AddProduct'
import GetProductData from './componenets/GetProductData'
import ProductInterface from './ProductInterface';


function App() {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [show, setShow]  =useState<boolean>(false);
  
  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>{(show ? 'Show Form' : 'Hide Form')}</button>
      <div className={(show? 'hide' : '')}>
        <AddProduct />
      </div>
      <GetProductData setProducts={setProducts} products={products}/>
    </div>
  )
}

export default App
