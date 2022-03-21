import {
    ACCOUNT_DELETE_FAILED,
    ACCOUNT_DELETE_INITIATED,
    ACCOUNT_DELETE_SUCCESS,
    ADD_EDUCATION_FAILED,
    ADD_EDUCATION_INITIATED,
    ADD_EDUCATION_SUCCESS,
    ADD_EXPERIENCE_FAILED, ADD_EXPERIENCE_INITIATED, ADD_EXPERIENCE_SUCCESS, CLEAR_PROFILE,
    CREATE_PROFILE_FAILED, CREATE_PROFILE_INITIATED, CREATE_PROFILE_SUCCESS, DELETE_EDUCATION_FAILED, DELETE_EDUCATION_INITIATED, DELETE_EDUCATION_SUCCESS, DELETE_EXPERIENCE_FAILED, DELETE_EXPERIENCE_INITIATED, DELETE_EXPERIENCE_SUCCESS, LOAD_PROFILE_FAILED,
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
    addedEducation: null,
    deletingExperience: null,
    deletedExperience: null,
    deletingEducation: null,
    deletedEducation: null,
    deletingAccount: null,
    deletedAccount: null,
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
        case DELETE_EXPERIENCE_INITIATED:
            return {
                ...state,
                deletingExperience: true,
            }
        case DELETE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                deletingExperience: false,
                profile: action.payload,
                deletedExperience: true,
            }
        case DELETE_EXPERIENCE_FAILED:
            return {
                ...state,
                deletingExperience: false,
                profile: {},
                deletedExperience: false
            }
        case DELETE_EDUCATION_INITIATED:
            return {
                ...state,
                deletingEducation: true,
            }
        case DELETE_EDUCATION_SUCCESS:
            return {
                ...state,
                deletingEducation: false,
                profile: action.payload,
                deletedEducation: true,
            }
        case DELETE_EDUCATION_FAILED:
            return {
                ...state,
                deletingEducation: false,
                profile: {},
                deletedEducation: false
            }
        case ACCOUNT_DELETE_INITIATED:
            return {
                ...state,
                deletingAccount: true,
            }
        case ACCOUNT_DELETE_SUCCESS:
            return {
                ...state,
                deletingAccount: false,
                deletedAccount: true,
            }
        case ACCOUNT_DELETE_FAILED:
            return {
                ...state,
                deletingAccount: false,
                deletedAccount: false
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