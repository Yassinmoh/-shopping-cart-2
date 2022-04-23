import { FETCH_PRODUCTS,FILTER_SIZE,FILTER_SORT} from './Types'

export const fetchProducts = () => {
    return (dispatch) => {
        fetch('/api/products').then(res => res.json()).then(data => {
            dispatch({
                type: FETCH_PRODUCTS,
                data: data
            })
        })
    }
}

export const filterdSize = (products,value) => {
    return (dispatch) => {
        let productClone = [...products]
        let newProduct = productClone.filter(p => p.size.indexOf(value) != -1)
        dispatch({
            type: FILTER_SIZE,
            data: {
                size: value,
                products: value == "ALL" ? products : newProduct
            }

        })
    }
}

export const filterdSort = (products, value) => {
    return (dispatch) => {
        let productClone = [...products];
        let newProduct = productClone.sort(function (a, b) {
            if (value == "lowest") {
                return a.price - b.price;
            } else if (value == "highest") {
                return b.price - a.price
            } else {
                return a.id < b.id ? 1 : -1
            }
        })
        dispatch({
            type:FILTER_SORT,
            data:{
                sort:value,
                products:newProduct
            }
        })
    }
}

