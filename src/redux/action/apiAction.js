import axios from "axios"
import { GET_COMMENTS_FROM_API } from "../types";

export const getCommentsAction = () => async dispatch => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        dispatch({
            type: GET_COMMENTS_FROM_API,
            payload: response.data
        });
    }
    catch (error) {
        console.log(error)
    }
}