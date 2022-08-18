import {UsersAction, UsersState, UserActionTypes} from "../../types/User";

export const initialState: UsersState = {
    userInfo: {email: "", id: 0, name: ""},
    isAuth: false,
    error: "",
}

export const userReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, error: "Произошла ошибка при загрузке пользователей"}
        case UserActionTypes.FETCH_USERS:
            return {...state, error: "", userInfo: action.payload, isAuth: true}
        case UserActionTypes.FETCH_USERS_LOGOUT:
            localStorage.removeItem('token')
            return {...state,  isAuth: false}
        default:
            return state
    }
}

export const setUser = (userInfo: {email: "", id: 0, name: ""}) => ({type: UserActionTypes.FETCH_USERS, payload: userInfo})
export const logout = () => ({type: UserActionTypes.FETCH_USERS_LOGOUT})