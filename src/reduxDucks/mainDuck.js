import axios from "axios";

//types tipos de acción
const GET_USERS = 'GET_USERS';
const SET_LOGIN = 'SET_LOGIN_SUCCESS'
const SAVE_USER_DATA = 'SAVE_USER_DATA'
const GET_DOGS = 'GET_DOGS'

// initialStore almacén de datos Inicial
const initialState = {
    users: [],
    login: false,
    userData: {
        name: '',
        email: '',
        id: null
    },
    dogsImages: []
};

// función reductora
export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        case SAVE_USER_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case GET_DOGS:
            return {
                ...state,
                dogsImages: action.payload
            }
        default: return state
    }
};

// acciones
export const getUsersAction = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    try {
        dispatch({
            type: GET_USERS,
            payload: response.data
        })
    } catch (error) {
        console.error();
    }
}

export const setLoginAction = (state, userData) => async dispatch => {
    dispatch({
        type: SET_LOGIN,
        payload: state
    });
    if (!userData) {
        dispatch({
            type: SAVE_USER_DATA,
            payload: {
                name: '',
                email: '',
                id: null
            }
        })
    } else {
        dispatch({
            type: SAVE_USER_DATA,
            payload: userData
        })
    }

};

export const getDogsAction = () => async dispatch => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random/50');
    try {
        dispatch({
            type: GET_DOGS,
            payload: response.data.message
        })
    } catch (error) {
        console.error();
    }
}