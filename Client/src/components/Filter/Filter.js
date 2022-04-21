import React from 'react'
import './Filter.css'
import Flip from 'react-reveal/Flip';
const Filter = ({
    size,
    sort,
    handelFilterBySize,
    handelFilterBySort,
    productNumber
}) => {
    return (
        <Flip left cascade>
            <div className="filter-wrapper">
                <h2 className="filter-title">Filter</h2>
                <div className="nom-of-product">number of product {productNumber} </div>
                <div className="filter-by-size">
                    <span className="span-title">Size</span>
                    <select className="filter-select" onChange={handelFilterBySize} value={size}>
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
                    <select className="filter-select" onChange={handelFilterBySort} value={sort}>
                        <option value="lastes">Lastes</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
            </div>
        </Flip>
    )
}

export default Filter