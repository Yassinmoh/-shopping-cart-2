import React, { useState, useEffect } from 'react'
import './CSS/index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import Filter from './components/Filter/Filter'
import Cart from './components/Cart/Cart'
import data from './data.json'
import store from './store/Store'
import { Provider } from 'react-redux'





function App() {
  const [products, setProducts] = useState(data)
  const [size, setSize] = useState('')
  const [sort, setSort] = useState('')
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])


  const handelFilterBySize = (e) => {
    setSize(e.target.value)
    if (e.target.value == "ALL") {
      setProducts(data)
    } else {
      let productClone = [...products]
      let newProduct = productClone.filter(p => p.size.indexOf(e.target.value) != -1)
      setProducts(newProduct)
    }
  }

  const handelFilterBySort = (e) => {
    let order = e.target.value
    setSort(order)
    let productClone = [...products];
    let newProduct = productClone.sort(function (a, b) {
      if (order == "lowest") {
        return a.price - b.price;
      } else if (order == "highest") {
        return b.price - a.price
      } else {
        return a.id < b.id ? 1 : -1
      }
    })
    setProducts(newProduct)
  }


  const addToCart = (product) => {
    let cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach(p => {
      if (p.id == product.id) {
        p.qty++
        isProductExist = true;
      }
    })
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 })
    }
    setCartItems(cartItemsClone)
  }

  const removeFromCart = (product) => {
    let cartItemsClone = [...cartItems];
    let newCartItems = cartItemsClone.filter(p => p.id !== product.id)
    setCartItems(newCartItems)
  }

  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems))
  // }, [cartItems])
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} addToCart={addToCart} />
            <Filter
              handelFilterBySize={handelFilterBySize}
              handelFilterBySort={handelFilterBySort}
              size={size}
              sort={sort}
              productNumber={products.length}
            />
          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </main>
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
