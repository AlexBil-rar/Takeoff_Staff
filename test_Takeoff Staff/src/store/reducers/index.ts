import {combineReducers} from "redux";
import {userReducer} from "./UserReducers";
import {getuserReducer} from "./GetUserReducers";


export const rootReducer = combineReducers({
    user: userReducer,
    users: getuserReducer,
})



export type RootState = ReturnType<typeof rootReducer>