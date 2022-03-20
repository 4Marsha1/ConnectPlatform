import { CLEAR_PROFILE, LOAD_PROFILE_FAILED, LOAD_PROFILE_INITIATED, LOAD_PROFILE_SUCCESS } from "../actions/types";

const initialState = {
    loading: null,
    profile: {},
    loaded: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_PROFILE_INITIATED:
            return {
                ...state,
                loading: true,
            }
        case LOAD_PROFILE_SUCCESS:
            console.log(action.payload);
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
        case CLEAR_PROFILE:
            return {
                ...state,
                loading: null,
                profile: {},
                loaded: null
            }
        default: return state
    }
}