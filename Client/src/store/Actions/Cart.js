import { ADD_CART,REMOVE_CART } from './Types'



export const addToCart = (product) => {
    return (dispatch,getState) => {
        const cartItems=getState().cart.cartItems
        const cartItemsClone = [...cartItems];
        var isProductExist = false;
        cartItemsClone.forEach(p => {
            if (p.id == product.id) {
                p.qty++
                isProductExist = true;
            }
        })
        if (!isProductExist) {
            cartItemsClone.push({ ...product, qty: 1 })
        }
        dispatch({
            type: ADD_CART,
            data: {
                cartItems: cartItemsClone
            }
        })
        localStorage.setItem('cartItems',JSON.stringify(cartItemsClone))
    }
}


export const removeCart=(product)=>{
    return (dispatch,getState)=>{
        const cartItems =getState().cart.cartItems
        let cartItemsClone = [...cartItems];
        const updatedItems=cartItemsClone.filter(p => p.id !== product.id)
        dispatch({
            type: REMOVE_CART,
            data:{
                cartItems:updatedItems
            }
        })
        localStorage.setItem('cartItems',JSON.stringify(updatedItems))
    }
}