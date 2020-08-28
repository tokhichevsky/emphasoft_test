import {SEARCH_USERS_CHANGE} from "./types";

const initialState = {
    searchText: ""
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_USERS_CHANGE:
            return {searchText: action.payload.searchText};
        default: return state
    }
};
