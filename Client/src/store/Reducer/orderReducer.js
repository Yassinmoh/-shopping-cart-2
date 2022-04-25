import { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS } from '../Actions/Types'
export const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return { ...state,orders: action.data.orders }
        case CREATE_ORDER:
            return { order: action.data.order }
        case CLEAR_ORDER:
            return { order: false }
        default:
            return state
    }
}