import {LOG_IN, LOG_OUT} from "./types";

const initialState = {
    token: localStorage.getItem("token") ? localStorage.getItem("token") : ""
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            localStorage.setItem("token", action.payload.token);
            return {token: action.payload.token};
        case LOG_OUT:
            localStorage.setItem("token", "");
            return { token: "" };
        default: return state
    }
};
