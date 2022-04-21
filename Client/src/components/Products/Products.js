import React, { useState } from 'react'
import './Products.css'
import ProductModal from './ProductModal'
import Bounce from 'react-reveal/Bounce';
const Products = ({ products ,addToCart}) => {
    const [product, setProduct] = useState('')

    const showModal = (product) => {
        setProduct(product)
    }
    const closeModal = () => {
        setProduct('')
    }
    return (
        <Bounce left cascade>
        <div className="products-wrapper">{products.map(product => (
            <div className="product-item" key={Math.random()}>
                <a href="#" onClick={() => showModal(product)}>
                    <img src={product.imageUrl} />
                </a>
                <div className="product-desc">
                    <p>{product.title}</p>
                    <span>${product.price}</span>
                </div>
                <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
        ))}
            <ProductModal product={product} closeModal={closeModal}/>
        </div>
        </Bounce>
    )
}

export default Products