// función para manejar los reducer dentro del store
import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import mainReducer from "./mainReducer";

// importamos los distintos reducer que creemos


export default combineReducers({
    main: mainReducer,
    api: apiReducer
})