import { useState } from 'react'
import Categories from './components/Categories';
import AddProduct from './components/AddProduct'
import GetProductData from './components/GetProductData'
import SetCateogories from './components/SetCateogories';
import GetCategories from './components/GetCategories';
import ProductInterface from './ProductInterface';


function App() {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [show, setShow]  =useState<boolean>(true);
  const [categoriesArray, setCategoriesArray] = useState<string[]>([])
  const [activeProductCategory, setActiveProductCatgory] = useState<string>('all')
  
  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>{(show ? 'Show Form' : 'Hide Form')}</button>
      <div className={(show? 'hide' : '')}>
        <AddProduct />
        <GetCategories setCategoriesArray={setCategoriesArray}/>
        <Categories />
      </div>
      <SetCateogories />
      <GetProductData setProducts={setProducts} products={products.slice(1, 10)}/>
    </div>
  )
}

export default App
