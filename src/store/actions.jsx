import {authRequest} from "../requests/requests";
import {LOG_IN, LOG_OUT, SEARCH_USERS_CHANGE} from "./types";

export function login(username, password) {
    return async dispatch => {
        try {
            const response = await authRequest(username, password);
            const json = await response.json();
            dispatch({type: LOG_IN, payload: json});
        } catch (e) {
            console.error(e)
        }
    }
}

export function logout() {
    return {
        type: LOG_OUT
    }
}

export function searchChange(searchText) {
    return {
        type: SEARCH_USERS_CHANGE,
        payload: {searchText}
    }
}
