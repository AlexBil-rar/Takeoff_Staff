import {UsersAction, UserActionTypes} from "../../types/User";
import {GetUsersAction, GetUserActionTypes} from "../../types/GetUser";
import {Dispatch} from "redux";
import axios from "axios";
import { setUser } from "../reducers/UserReducers";

export const fetchUsers = (email: string, password: string) => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            const response = await axios.post('http://localhost:5000/login', 
                {
                    email, 
                    password 
                },
            );
                dispatch(setUser(response.data.user))
                localStorage.setItem('token', response.data.accessToken)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

export const getUsers = () => {
    return async (dispatch: Dispatch<GetUsersAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/users');
                dispatch({type: GetUserActionTypes.FETCH_GET_USERS, payload: response.data})
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }
}

export const PutUser = ( ID: number, email: string, name: string, password: string) => {
    return async (dispatch: Dispatch<GetUsersAction>) => {
        try {
            const response = await axios.put(`http://localhost:5000/users/${ID}`,
            {
                name,
                password,
                email
            })
                dispatch({type: GetUserActionTypes.PUT_USERS, payload: response.data})
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }
}

export const delUsers = (Id: number) => {
    return async (dispatch: Dispatch<GetUsersAction>) => {
        try {
            const response = await axios.delete(`http://localhost:5000/users/${Id}`);
                dispatch({type: GetUserActionTypes.FETCH_GET_USERS, payload: response.data})
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }
}

export const addUser = (email: string, name: string, password: string) => {
    return async (dispatch: Dispatch<GetUsersAction>) => {
        try {
            const response = await axios.post(`http://localhost:5000/users`,
            {
                name,
                password,
                email
            })
                dispatch({type: GetUserActionTypes.ADD_USERS, payload: response.data})
        } catch (e: any) {
            alert(e.response.data.message)
        }
    }
}






