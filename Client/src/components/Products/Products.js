import React from 'react'
import './Products.css'
const Products = ({products}) => {
    return (
        <div className="products-wrapper">{products.map(product => (
            <div className="product-item" key={Math.random()}>
                    <img src={product.imageUrl}/>
                    <div className="product-desc">
                        <p>{product.title}</p>
                        <span>{product.price}</span>
                    </div>
                <button>Add to Cart</button>
            </div>
        ))}</div>
    )
}

export default Products