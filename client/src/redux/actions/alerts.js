import { v4 as uuidv4 } from 'uuid';
import { REMOVE_ALERT, SET_ALERT } from "./types"

export const setAlert = (msg, type, duration) => dispatch => {
    const id = uuidv4();
    dispatch({
        type: SET_ALERT,
        payload: { id, msg, type }
    })

    setTimeout(() => dispatch({
        type: REMOVE_ALERT,
        payload: id
    }), duration)
}