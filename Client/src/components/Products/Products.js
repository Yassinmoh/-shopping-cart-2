import React, { useState, useEffect } from 'react'
import './Products.css'
import ProductModal from './ProductModal'
import Bounce from 'react-reveal/Bounce';
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/Actions/Products';
import {addToCart} from '../../store/Actions/Cart' 



const Products = ({ products, addToCart, fetchProducts }) => {
    const [product, setProduct] = useState('')

    const showModal = (product) => {
        setProduct(product)
    }
    const closeModal = () => {
        setProduct('')
    }


    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <Bounce left cascade>
            <div className="products-wrapper">
                {products && products.length ? products.map(product => (
                    <div className="product-item" key={Math.random()}>
                        <a href="#" onClick={() => showModal(product)}>
                            <img src={product.imageUrl} />
                        </a>
                        <div className="product-desc">
                            <p>{product.title}</p>
                            <span>${product.price}</span>
                        </div>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                )): "Loading..."}
                <ProductModal product={product} closeModal={closeModal} />
            </div>
        </Bounce>
    )
}

// export default Products

export default connect((state) => {
    return {
        products: state.products.filterProducts
    }
}, { fetchProducts ,addToCart})(Products)