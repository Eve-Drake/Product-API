import { useState } from 'react'
import AddProduct from './components/AddProduct'
import GetProductData from './components/GetProductData'
import SetCateogories from './components/SetCateogories';
import ProductInterface from './ProductInterface';


function App() {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [show, setShow]  =useState<boolean>(true);
  const [activeProductCategory, setActiveProductCatgory] = useState<string>('all')
  
  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>{(show ? 'Show Form' : 'Hide Form')}</button>
      <div className={(show? 'hide' : '')}>
        <AddProduct />
      </div>
      <SetCateogories />
      <GetProductData setProducts={setProducts} products={products}/>
    </div>
  )
}

export default App
