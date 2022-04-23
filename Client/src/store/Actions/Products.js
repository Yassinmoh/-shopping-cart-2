import {FETCH_PRODUCTS} from './Types'
export const fetchProducts=()=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/api/products').then(res=> res.json()).then(data =>{
        dispatch({
                type: FETCH_PRODUCTS,
                data: data
            })
        })
    }
}
