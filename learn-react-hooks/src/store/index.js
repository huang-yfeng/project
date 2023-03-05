import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import userReducer from "../reduxReducer/userReducer"

const all = combineReducers({
    userinfo: userReducer
})

const store = createStore(all, applyMiddleware(thunk))

export { store }