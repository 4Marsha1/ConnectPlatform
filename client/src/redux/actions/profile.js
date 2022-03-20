import axios from "axios"
import { LOAD_PROFILE_FAILED, LOAD_PROFILE_INITIATED, LOAD_PROFILE_SUCCESS } from "./types"

export const loadProfile = (token) => async dispatch => {
    dispatch({
        type: LOAD_PROFILE_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/profile', config)
        dispatch({
            type: LOAD_PROFILE_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: LOAD_PROFILE_FAILED,
        })
    }
}