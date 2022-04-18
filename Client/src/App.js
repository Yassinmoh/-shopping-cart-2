import React, { useState } from 'react'
import './CSS/index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import Filter from './components/Filter/Filter'
import data from './data.json'
function App() {
  const [products, setProducts] = useState(data)
  const [size, setSize] = useState('')
  const [sort, setSort] = useState('')


  const handelFilterBySize = (e) => {
    setSize(e.target.value)
    if(e.target.value == "ALL"){
      setProducts(data)
    }else{
      let productClone =[...products]
      let newProduct = productClone.filter(p => p.size.indexOf(e.target.value) != -1)
      setProducts(newProduct)
    }
  }

  const handelFilterBySort = (e) => {
    let order = e.target.value
    setSort(order)
    let productClone =[...products];
    let newProduct = productClone.sort(function(a, b) {
      if (order == "lowest"){
        return a.price - b.price;
      }else if (order == "highest"){
        return b.price - a.price
      }else{
        return a.id < b.id ? 1 : -1
      }
    })
    setProducts(newProduct)
  }

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter 
            handelFilterBySize={handelFilterBySize} 
            handelFilterBySort={handelFilterBySort} 
            size={size} 
            sort={sort}
            />
        </div>
      </main>
      <Footer />

    </div>
  );
}

export default App;
