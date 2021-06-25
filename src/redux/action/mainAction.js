import { LOGIN_ACTION, LOGOUT_ACTION } from "../types";

export const logoutAction = () => async dispatch => {
    dispatch({
        type: LOGOUT_ACTION
    });
}

export const loginAction = (data) => async dispatch => {
    dispatch({
        type: LOGIN_ACTION,
        payload: data
    });
}