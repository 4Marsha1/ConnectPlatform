import api from '../../api'
import { URL_PREFIX } from '../../constants'
import { CLEAR_PROFILE, LOAD_FAILED, LOAD_INITIATED, LOAD_SUCCESS, LOGIN_FAILED, LOGIN_INITIATED, LOGIN_SUCCESS, LOGOUT_USER, REGISTER_FAILED, REGISTER_INITIATED, REGISTER_SUCCESS } from './types'

export const registerUser = (name, email, password) => async dispatch => {
    dispatch({
        type: REGISTER_INITIATED
    })
    const data = {
        "name": name,
        "email": email,
        "password": password
    }
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        const res = await api.post(URL_PREFIX + "/api/users/", data, config);
        const payload = await res.data;
        dispatch({
            type: REGISTER_SUCCESS,
            payload
        })
    } catch (err) {
        dispatch({
            type: REGISTER_FAILED,
        })
    }
}

export const loginUser = (email, password) => async dispatch => {
    dispatch({
        type: LOGIN_INITIATED
    })
    const data = {
        "email": email,
        "password": password
    }
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        const res = await api.post(URL_PREFIX + "/api/users/login", data, config);
        const payload = await res.data;
        dispatch({
            type: LOGIN_SUCCESS,
            payload
        })
    } catch (err) {
        dispatch({
            type: LOGIN_FAILED,
        })
    }
}

export const loadUser = (token) => async dispatch => {
    dispatch({
        type: LOAD_INITIATED
    })
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    try {
        const res = await api.get(URL_PREFIX + "/api/users/", config);
        const payload = await res.data;
        dispatch({
            type: LOAD_SUCCESS,
            payload
        })
    } catch (err) {
        dispatch({
            type: LOAD_FAILED,
        })
    }
}

export const logoutUser = () => async dispatch => {
    dispatch({
        type: CLEAR_PROFILE
    })
    dispatch({
        type: LOGOUT_USER
    })
}