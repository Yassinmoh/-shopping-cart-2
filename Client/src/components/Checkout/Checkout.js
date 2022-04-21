import React from 'react'
import './Checkout.css'
import Input from '../Input/Input'
const Checkout = ({showForm,submitOrder,handelChange,setShowForm}) => {
    return (
        <div>
            {
                showForm && (
                    <div className="checkout-form" >
                        <span className="close-icon" onClick={() => setShowForm(false)}>&times;</span>
                        <form onSubmit={submitOrder}>
                            <Input
                                label="Name"
                                type="text"
                                placeholder="Enter Your Name"
                                onChange={handelChange}
                                name="name"
                            />
                            <Input
                                label="Email"
                                type="email"
                                placeholder="Enter Your Email"
                                onChange={handelChange}
                                name="email"
                            />
                            
                            <div>
                                <button type="submit">Checkout</button>
                            </div>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default Checkout