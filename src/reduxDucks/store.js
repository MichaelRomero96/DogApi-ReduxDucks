import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./loginDucks";
import mainReducer from "./mainDuck";

// reducer
const rootReducer = combineReducers({
    main: mainReducer,
    login: loginReducer
});
//llamado de reduxDevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//crear una funcion para generar el Store para el caso de los ducks
export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}

