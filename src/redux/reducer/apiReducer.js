import { GET_COMMENTS_FROM_API, LOGIN_ACTION, LOGOUT_ACTION } from "../types";


const initialState = {
    comments: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS_FROM_API:
            return {
                ...state,
                comments: action.payload
            }
        default: return state;
    };
};

