import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {usersReducer} from "./usersReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    users: usersReducer
});
