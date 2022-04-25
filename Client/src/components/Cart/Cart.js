import React, { useState } from 'react'
import './Cart.css'
import Bounce from 'react-reveal/Bounce';
import Checkout from '../Checkout/Checkout'
import { connect } from 'react-redux'
import { removeCart } from '../../store/Actions/Cart'
import OrderModal from '../Cart/OrderModal'
import { createOrder, clearOrder } from '../../store/Actions/Orders'

const Cart = ({ cartItems, removeCart, createOrder, clearOrder, order }) => {

    const [showForm, setShowForm] = useState(false)
    const [value, setValue] = useState('')

    const submitOrder = (e) => {
        e.preventDefault()
        const order = {
            name: value.name,
            email: value.email,
        }
        createOrder(order);
    }

    const handelChange = (e) => {
        setValue((prevStat) => ({ ...prevStat, [e.target.name]: e.target.value }))
    }

    const closeModal = () => {
        clearOrder();
        setShowForm(false);
    }

    return (
        <div className="cart-wrapper">
            <div className="cart-title">{cartItems.length === 0 ? 'Cart Empty' : `There is ${cartItems.length} Order`}</div>
            {/* Order Modal */}
            <OrderModal closeModal={closeModal} cartItems={cartItems} order={order} />
            <Bounce left cascade>
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.imageUrl} alt={item.title} />
                            <div className="cart-info">
                                <div>
                                    <p>Title: {item.title}</p>
                                    <p>Quantity: {item.qty}</p>
                                    <p>Price: ${item.price}</p>
                                </div>
                                <button onClick={() => removeCart(item)}>Remove</button>
                            </div>
                        </div>))}
                </div>
            </Bounce>
            {
                cartItems != 0 && (
                    <div className="cart-footer">
                        <div className="totel">Totel:${cartItems.reduce((acc, p) => {
                            return acc + Number(p.price) * p.qty
                        }, 0)}
                        </div>
                        <button onClick={() => setShowForm(true)}>Select Product</button>
                    </div>
                )
            }
            <Checkout submitOrder={submitOrder} handelChange={handelChange} showForm={showForm} setShowForm={setShowForm} />
        </div>
    )
}

export default connect((state) => {
    return {
        order: state.order.order,
        cartItems: state.cart.cartItems
    }
}, { removeCart, createOrder, clearOrder })(Cart)