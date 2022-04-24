import React, { useState } from 'react'
import './Cart.css'
import Modal from 'react-modal'
import Bounce from 'react-reveal/Bounce';
import Checkout from '../Checkout/Checkout'
import { connect } from 'react-redux'
import { removeCart } from '../../store/Actions/Cart'
import { useDispatch } from 'react-redux'

const Cart = ({ cartItems, removeCart }, props) => {
    const dispatch = useDispatch();

    const [order, setOrder] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [value, setValue] = useState('')




    const submitOrder = (e) => {
        e.preventDefault()
        const order = {
            name: value.name,
            email: value.email,
        }
        setOrder(order);
    }

    const handelChange = (e) => {
        setValue((prevStat) => ({ ...prevStat, [e.target.name]: e.target.value }))
    }

    const closeModal=()=>{
        setOrder(false);
    }

    return (
        <div className="cart-wrapper">
            <div className="cart-title">{cartItems.length === 0 ? 'Cart Empty' : `There is ${cartItems.length} Order`}</div>
            {/* Order Modal */}
            <Modal isOpen={order} onRequestClose={closeModal}>
                <div className="order-info">
                    <span className="close-modal" onClick={closeModal}>&times;</span>
                    <p className="alert-success">Order Done Successfuly</p>
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>{order.name}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{order.email}</td>
                        </tr>
                        <tr>
                            <td>Total:$</td>
                            <td>{cartItems.reduce((acc, p) => {
                                return acc + Number(p.price) * p.qty
                            }, 0)}</td>
                        </tr>
                        <tr>
                            <td>Selected products:</td>
                            <td>{cartItems.map(p => (
                                <div className="card-data">
                                    <p>Number of Products: {p.qty}</p>
                                    <p>Title of Products : {p.title}</p>
                                </div>
                            ))}</td>
                        </tr>
                    </table>
                </div>
            </Modal>
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
            {/* Checkout-Form */}
            <Checkout submitOrder={submitOrder} handelChange={handelChange} showForm={showForm} setShowForm={setShowForm} />


        </div>

    )
}

export default connect((state) => {
    return {
        cartItems: state.cart.cartItems
    }
}, { removeCart })(Cart)