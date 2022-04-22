import {createStore,compose,applyMiddleware} from 'redux'
import reducer from './Reducer/Reducer'
import reduxthunk from 'redux-thunk'

const initialState = {}
const enhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose
const store = createStore(reducer,initialState,enhancer(applyMiddleware(reduxthunk)))

export default store