import React, { useState } from 'react'
import './Products.css'
import ProductModal from './ProductModal'
const Products = ({ products }) => {
    const [product, setProduct] = useState('')

    const showModal = (product) => {
        setProduct(product)
    }
    const closeModal = () => {
        setProduct('')
    }
    return (
        <div className="products-wrapper">{products.map(product => (
            <div className="product-item" key={Math.random()}>
                <a href="#" onClick={() => showModal(product)}>
                    <img src={product.imageUrl} />
                </a>
                <div className="product-desc">
                    <p>{product.title}</p>
                    <span>${product.price}</span>
                </div>
                <button>Add to Cart</button>
            </div>
        ))}
            <ProductModal product={product} closeModal={closeModal}/>
        </div>
    )
}

export default Products