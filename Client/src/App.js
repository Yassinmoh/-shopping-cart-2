import React from 'react'
import './CSS/index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import store from './store/Store'
import { Provider } from 'react-redux'
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="layout">
          <Header />
          <main>
            <Navbar/>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/orders"  element={<Orders />}/>
          </Routes>
          </main>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
