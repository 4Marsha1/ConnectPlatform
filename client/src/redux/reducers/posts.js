import { ADD_LIKE_FAILED, ADD_LIKE_INITIATED, ADD_LIKE_SUCCESS, DELETE_LIKE_FAILED, DELETE_LIKE_INITIATED, DELETE_LIKE_SUCCESS, GET_POSTS_FAILED, GET_POSTS_INITIATED, GET_POSTS_SUCCESS } from "../actions/types";

const initialState = {
    posts: [],
    post: {},
    loading: null,
    loaded: null,
    addingLike: null,
    addedLike: null,
    deletingLike: null,
    deletedLike: null,
    err: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_INITIATED:
            return {
                ...state,
                loading: true,
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                loaded: true,
            }
        case GET_POSTS_FAILED:
            return {
                ...state,
                loading: false,
                posts: [],
                loaded: false,
                err: action.payload
            }
        case ADD_LIKE_INITIATED:
            return {
                ...state,
                addingLike: true,
            }
        case ADD_LIKE_SUCCESS:
            return {
                ...state,
                addingLike: false,
                post: action.payload,
                addedLike: true,
            }
        case ADD_LIKE_FAILED:
            return {
                ...state,
                addingLike: false,
                post: {},
                addedLike: false,
                err: action.payload
            }
        case DELETE_LIKE_INITIATED:
            return {
                ...state,
                deletingLike: true,
            }
        case DELETE_LIKE_SUCCESS:
            return {
                ...state,
                deletingLike: false,
                post: action.payload,
                deletedLike: true,
            }
        case DELETE_LIKE_FAILED:
            return {
                ...state,
                deletedLike: false,
                post: {},
                deletedLike: false,
                err: action.payload
            }
        default: return state
    }
}