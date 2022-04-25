import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <div className="nav">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/orders">Orders</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar