import React from 'react'
import Modal from 'react-modal'

const ProductModal = ({product,closeModal}) => {
    return (
        <Modal isOpen={product} onRequestClose={closeModal}>
                <span className="icon-close" onClick={closeModal}>&times;</span>
                <div className="product-info">
                    <img src={product.imageUrl} alt={product.title} />
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <p>{product.desc}</p>
                </div>
            </Modal>
    )
}

export default ProductModal