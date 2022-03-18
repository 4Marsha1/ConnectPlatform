import { combineReducers } from "redux";
import alerts from './alerts'

const rootReducer = combineReducers({
    alertReducer: alerts
})

export default rootReducer