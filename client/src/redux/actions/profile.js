import axios from "axios"
import {
    ADD_EDUCATION_FAILED, ADD_EDUCATION_INITIATED, ADD_EDUCATION_SUCCESS, ADD_EXPERIENCE_FAILED,
    ADD_EXPERIENCE_INITIATED, ADD_EXPERIENCE_SUCCESS, CREATE_PROFILE_FAILED, CREATE_PROFILE_INITIATED, CREATE_PROFILE_SUCCESS,
    LOAD_PROFILE_FAILED, LOAD_PROFILE_INITIATED, LOAD_PROFILE_SUCCESS, DELETE_EXPERIENCE_INITIATED, DELETE_EXPERIENCE_SUCCESS,
    DELETE_EXPERIENCE_FAILED, DELETE_EDUCATION_INITIATED, DELETE_EDUCATION_SUCCESS, DELETE_EDUCATION_FAILED, ACCOUNT_DELETE_INITIATED, ACCOUNT_DELETE_SUCCESS, ACCOUNT_DELETE_FAILED, CLEAR_PROFILE
} from "./types"

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

export const createProfile = (company, website, location, status, skills, githubusername,
    bio, twitter, facebook, linkedin, youtube, instagram, token) => async dispatch => {
        dispatch({
            type: CREATE_PROFILE_INITIATED
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        const body = JSON.stringify({
            company, website, location, status, skills, githubusername,
            bio, twitter, facebook, linkedin, youtube, instagram,
        })
        try {
            const res = await axios.post('http://localhost:5000/api/profile', body, config)
            dispatch({
                type: CREATE_PROFILE_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: CREATE_PROFILE_FAILED
            })
        }
    }

export const addExperience = (title, company, location, from, to, current, description, token) => async dispatch => {
    dispatch({
        type: ADD_EXPERIENCE_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const body = JSON.stringify({
        title, company, location, from, to, current, description
    })
    try {
        const res = await axios.post('http://localhost:5000/api/profile/experiences', body, config)
        dispatch({
            type: ADD_EXPERIENCE_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ADD_EXPERIENCE_FAILED
        })
    }
}

export const addEducation = (school, degree, fieldofstudy, from, to, current, description, token) => async dispatch => {
    dispatch({
        type: ADD_EDUCATION_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const body = JSON.stringify({
        school, degree, fieldofstudy, from, to, current, description
    })
    try {
        const res = await axios.post('http://localhost:5000/api/profile/education', body, config)
        dispatch({
            type: ADD_EDUCATION_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ADD_EDUCATION_FAILED
        })
    }
}

export const deleteExperience = (id, token) => async dispatch => {
    dispatch({
        type: DELETE_EXPERIENCE_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const res = await axios.delete(`http://localhost:5000/api/profile/experiences/${id}`, config)
        dispatch({
            type: DELETE_EXPERIENCE_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DELETE_EXPERIENCE_FAILED
        })
    }
}

export const deleteEducation = (id, token) => async dispatch => {
    dispatch({
        type: DELETE_EDUCATION_INITIATED
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    try {
        const res = await axios.delete(`http://localhost:5000/api/profile/education/${id}`, config)
        dispatch({
            type: DELETE_EDUCATION_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: DELETE_EDUCATION_FAILED
        })
    }
}

export const deleteAccount = (token) => async dispatch => {
    dispatch({
        type: ACCOUNT_DELETE_INITIATED
    })
    if (window.confirm('Are you sure? Account Deletion cant be undone!')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        try {
            await axios.delete('http://localhost:5000/api/profile/', config)
            dispatch({
                type: CLEAR_PROFILE
            })
            dispatch({
                type: ACCOUNT_DELETE_SUCCESS,
            })
        } catch (err) {
            dispatch({
                type: ACCOUNT_DELETE_FAILED
            })
        }
    }
}