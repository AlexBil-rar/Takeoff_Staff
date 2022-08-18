import {GetUsersAction, GetUsersState, GetUserActionTypes} from "../../types/GetUser";

export const initialState: GetUsersState = {
    users: []
}

export const getuserReducer = (state = initialState, action: GetUsersAction): GetUsersState => {
    switch (action.type) {
        case GetUserActionTypes.FETCH_GET_USERS:
            return {...state, users: action.payload}
        case GetUserActionTypes.ADD_USERS:
            return {...state, users: [...state.users, action.payload]}
        case GetUserActionTypes.PUT_USERS:
            return {...state, users: [...state.users, action.payload]}
        default:
            return state
    }
}

