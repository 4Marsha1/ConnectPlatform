import { combineReducers } from "redux";
import alerts from './alerts'
import auth from './auth'
import profile from "./profile";

const rootReducer = combineReducers({
    alertReducer: alerts,
    authReducer: auth,
    profileReducer: profile
})

export default rootReducer