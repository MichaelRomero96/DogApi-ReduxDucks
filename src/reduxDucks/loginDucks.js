
//types tipos de acción
const SET_LOGIN_MODAL = 'SET_LOGIN_MODAL';

// initialStore almacén de datos Inicial
const initialState = {
    loginDialog: false
};

// función reductora
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN_MODAL:
            return {
                ...state,
                loginDialog: action.payload
            }
        default: return state
    }
};

// acciones
export const setLoginDialogAction = state => async dispatch => {
    dispatch({
        type: SET_LOGIN_MODAL,
        payload: state
    })
}