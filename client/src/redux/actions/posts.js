import axios from "axios"
import {
    ADD_LIKE_FAILED, ADD_LIKE_INITIATED, ADD_LIKE_SUCCESS, DELETE_LIKE_FAILED, DELETE_LIKE_INITIATED,
    DELETE_LIKE_SUCCESS, GET_POSTS_FAILED, GET_POSTS_INITIATED, GET_POSTS_SUCCESS
} from "./types"

export const getPosts = (token) => async dispatch => {
    dispatch({
        type: GET_POSTS_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const res = await axios.get('/api/posts/', config);
        dispatch({
            type: GET_POSTS_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_POSTS_FAILED,
            payload: err.message
        })
    }
}

export const addLike = (token, id) => async dispatch => {
    dispatch({
        type: ADD_LIKE_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const res = await axios.post(`/api/posts/like/${id}`, config)
        dispatch({
            type: ADD_LIKE_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ADD_LIKE_FAILED,
            payload: err.message
        })
    }
}

export const deleteLike = (token, id) => async dispatch => {
    dispatch({
        type: DELETE_LIKE_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const res = await axios.delete(`/api/posts/like/${id}`, config)
        dispatch({
            type: DELETE_LIKE_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DELETE_LIKE_FAILED,
            payload: err.message
        })
    }
}