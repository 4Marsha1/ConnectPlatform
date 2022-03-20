import {
    LOAD_FAILED, LOAD_INITIATED, LOAD_SUCCESS, LOGIN_FAILED, LOGIN_INITIATED, LOGIN_SUCCESS,
    LOGOUT_USER,
    REGISTER_FAILED, REGISTER_INITIATED, REGISTER_SUCCESS
} from "../actions/types";

const initialState = {
    isRegisterInitiated: null,
    isLoginInitiated: null,
    isLoadInitiated: null,
    isLoadSuccessful: null,
    isAuthenticated: false,
    user: {},
    token: localStorage.getItem('token'),
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_INITIATED:
            return {
                ...state,
                isRegisterInitiated: true,
            }
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                isRegisterInitiated: false,
                isAuthenticated: true,
                user: action.payload,
                token: action.payload.token
            }
        case REGISTER_FAILED:
            return {
                ...state,
                isRegisterInitiated: false,
                isAuthenticated: false,
                user: {},
                token: null,
            }
        case LOGIN_INITIATED:
            return {
                ...state,
                isLoginInitiated: true,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                isLoginInitiated: false,
                isAuthenticated: true,
                user: action.payload,
                token: action.payload.token
            }
        case LOGIN_FAILED:
            return {
                ...state,
                isLoginInitiated: false,
                isAuthenticated: false,
                user: {},
                token: null,
            }
        case LOAD_INITIATED:
            return {
                ...state,
                isLoadInitiated: true,
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                isLoadInitiated: false,
                isLoadSuccessful: true,
                user: action.payload,
            }
        case LOAD_FAILED:
            return {
                ...state,
                isLoadInitiated: false,
                isLoadSuccessful: false,
                user: {},
            }
        case LOGOUT_USER:
            localStorage.removeItem('token')
            return {
                isRegisterInitiated: null,
                isLoginInitiated: null,
                isLoadInitiated: null,
                isLoadSuccessful: null,
                isAuthenticated: false,
                user: {},
                token: null
            }
        default: return state;
    }
}