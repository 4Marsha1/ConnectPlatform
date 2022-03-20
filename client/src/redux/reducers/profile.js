import { CLEAR_PROFILE, CREATE_PROFILE_FAILED, CREATE_PROFILE_INITIATED, CREATE_PROFILE_SUCCESS, LOAD_PROFILE_FAILED, LOAD_PROFILE_INITIATED, LOAD_PROFILE_SUCCESS } from "../actions/types";

const initialState = {
    loading: null,
    profile: {},
    loaded: null,
    creating: null,
    created: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_PROFILE_INITIATED:
            return {
                ...state,
                loading: true,
            }
        case LOAD_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: action.payload,
                loaded: true,
            }
        case LOAD_PROFILE_FAILED:
            return {
                ...state,
                loading: false,
                profile: {},
                loaded: false,
            }
        case CREATE_PROFILE_INITIATED:
            return {
                ...state,
                creating: true,
            }
        case CREATE_PROFILE_SUCCESS:
            return {
                ...state,
                creating: false,
                profile: action.payload,
                created: true,
            }
        case CREATE_PROFILE_FAILED:
            return {
                ...state,
                creating: false,
                profile: {},
                created: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                loading: null,
                profile: {},
                loaded: null,
                creating: null,
                created: null
            }
        default: return state
    }
}