import {ADD_CART,REMOVE_CART,CLEAR_CART} from '../Actions/Types'


export const cartReducer=(state={
    cartItems:JSON.parse(localStorage.getItem("cartItems")) || []
},action)=>{
    switch(action.type){
        case ADD_CART:
            return{cartItems:action.data.cartItems}
        case REMOVE_CART:
            return{cartItems:action.data.cartItems}
        case CLEAR_CART:
            return{...state,products:[]}
        default:
            return state
    }
}