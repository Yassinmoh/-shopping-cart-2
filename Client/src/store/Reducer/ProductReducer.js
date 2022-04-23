import {FETCH_PRODUCTS} from '../Actions/Types'
const ProductReducer=(state={},action)=>{
    switch(action.type) {
        case FETCH_PRODUCTS:
            return {products:action.data}
        default:
            return state
    }
}

export default ProductReducer