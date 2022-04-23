import React from 'react'
import './Filter.css'
import Flip from 'react-reveal/Flip';
import { connect } from 'react-redux'
import { filterdSize, filterdSort } from '../../store/Actions/Products'
import{useDispatch} from 'react-redux'


const Filter = (props) => {
    const dispatch = useDispatch();
    return (
        <Flip left cascade>
            {props.filterProducts && <div className="filter-wrapper">
                <h2 className="filter-title">Filter</h2>
                <div className="nom-of-product">number of product {props.filterProducts.length} </div>
                <div className="filter-by-size">
                    <span className="span-title">Size</span>
                    <select className="filter-select" onChange={(e) => dispatch(filterdSize(props.products, e.target.value))} value={props.size}>
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
                    <select className="filter-select" onChange={(e) => dispatch(filterdSort(props.filterProducts, e.target.value))} value={props.sort}>
                        <option value="lastes">Lastes</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
            </div>}
        </Flip>
    )
}

export default connect((state) => {
    return {
        sort: state.products.sort,
        size: state.products.size,
        products: state.products.products,
        filterProducts: state.products.filterProducts
    }
}, { filterdSize, filterdSort })(Filter)