import { combineReducers } from "redux";
import alerts from './alerts'
import auth from './auth'
import profile from "./profile";
import posts from "./posts";

const rootReducer = combineReducers({
    alertReducer: alerts,
    authReducer: auth,
    profileReducer: profile,
    postReducer: posts,
})

export default rootReducer