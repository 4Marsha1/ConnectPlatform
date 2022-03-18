import { REMOVE_ALERT, SET_ALERT } from "../actions/types";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALERT:
            console.log(action.payload);
            return [...state, action.payload]
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload)
        default:
            return state
    }
}

export default reducer