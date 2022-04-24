import ProductReducer from './ProductReducer'
import {cartReducer} from './CartReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    products:ProductReducer,
    cart:cartReducer
})


