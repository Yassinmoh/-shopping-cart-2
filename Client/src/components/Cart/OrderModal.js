import React from 'react'
import Modal from 'react-modal'



const OrderModal = ({ closeModal, order, cartItems }) => {
    return (
        <>
            {order && <Modal isOpen={order} onRequestClose={closeModal}>
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
                            <td>Total:</td>
                            <td>${cartItems.reduce((acc, p) => {
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
}
        </>
    )
}

export default OrderModal