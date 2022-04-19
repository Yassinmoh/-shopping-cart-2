import React from 'react'
import './Cart.css'
const Cart = ({ cartItems,removeFromCart }) => {
    return (
        <div className="cart-wrapper">
            <div className="cart-title">{cartItems.length=== 0 ? 'Cart Empty' : `There is ${cartItems.length} Order`}</div>
            <div className="cart-items">
                {cartItems.map((item) =>(
                    <div className="cart-item" key={item.id}>
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="cart-info">
                            <div>
                                <p>Title: {item.title}</p>
                                <p>Quantity: {item.qty}</p>
                                <p>Price: ${item.price}</p>
                            </div>
                            <button onClick={()=>removeFromCart(item)}>Remove</button>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}

export default Cart