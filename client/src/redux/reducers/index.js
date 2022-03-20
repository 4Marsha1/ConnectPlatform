import { combineReducers } from "redux";
import alerts from './alerts'
import auth from './auth'

const rootReducer = combineReducers({
    alertReducer: alerts,
    authReducer: auth
})

export default rootReducer