import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/Actions/Orders'
import './Orders.css'

const Orders = ({fetchOrders,orders,cartItems}) => {
    useEffect(() => {
        fetchOrders()
    }, [])

    return (
        <div className="orders">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Items</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders && orders.map(order => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{cartItems && cartItems.map(p =>(
                                    <p>{p.title} , Quantity: {p.qty}</p>
                                ))}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default connect((state)=>{
    return{
        orders: state.order.orders,
        cartItems: state.cart.cartItems
    }
},{fetchOrders})(Orders)