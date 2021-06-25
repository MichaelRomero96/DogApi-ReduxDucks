import { LOGIN_ACTION, LOGOUT_ACTION } from "../types";


const initialState = {
    user: { id: 1, name: 'Luis' }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_ACTION:
            return {
                ...state,
                user: {
                    id: null,
                    name: null
                }
            };
        case LOGIN_ACTION:
            return {
                ...state,
                user: action.payload
            }
        default: return state;
    };
};

