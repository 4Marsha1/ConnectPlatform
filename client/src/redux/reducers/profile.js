import {
    ADD_EDUCATION_FAILED,
    ADD_EDUCATION_INITIATED,
    ADD_EDUCATION_SUCCESS,
    ADD_EXPERIENCE_FAILED, ADD_EXPERIENCE_INITIATED, ADD_EXPERIENCE_SUCCESS, CLEAR_PROFILE,
    CREATE_PROFILE_FAILED, CREATE_PROFILE_INITIATED, CREATE_PROFILE_SUCCESS, LOAD_PROFILE_FAILED,
    LOAD_PROFILE_INITIATED, LOAD_PROFILE_SUCCESS
} from "../actions/types";

const initialState = {
    loading: null,
    profile: {},
    loaded: null,
    creating: null,
    created: null,
    addingExperience: null,
    addedExperience: null,
    addingEducation: null,
    addedEducation: null
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
        case ADD_EXPERIENCE_INITIATED:
            return {
                ...state,
                addingExperience: true,
            }
        case ADD_EXPERIENCE_SUCCESS:
            return {
                ...state,
                addingExperience: false,
                profile: action.payload,
                addedExperience: true,
            }
        case ADD_EXPERIENCE_FAILED:
            return {
                ...state,
                addingExperience: false,
                profile: {},
                addedExperience: false
            }
        case ADD_EDUCATION_INITIATED:
            return {
                ...state,
                addingEducation: true,
            }
        case ADD_EDUCATION_SUCCESS:
            return {
                ...state,
                addingEducation: false,
                profile: action.payload,
                addedEducation: true,
            }
        case ADD_EDUCATION_FAILED:
            return {
                ...state,
                addingEducation: false,
                profile: {},
                addedEducation: false
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