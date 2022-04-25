import ProductReducer from './ProductReducer'
import {cartReducer} from './CartReducer'
import {orderReducer} from './orderReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    products:ProductReducer,
    cart:cartReducer,
    order:orderReducer
})


