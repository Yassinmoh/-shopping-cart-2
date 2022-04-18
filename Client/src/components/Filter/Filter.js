import React from 'react'
import './Filter.css'
const Filter = () => {
    return (
        <div className="filter-wrapper">
            <h2 className="filter-title">Filter</h2>
            <div className="nom-of-product">number of product 4 </div>
            <div className="filter-by-size">
                <span className="span-title">Size</span>
                <select className="filter-select">
                    <option value="ALL">ALL</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
            <div className="filter-by-size">
                <span className="span-title">Order</span>
                <select className="filter-select">
                    <option value="lastes">Lastes</option>
                    <option value="lower">Lower</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
        </div>
    )
}

export default Filter