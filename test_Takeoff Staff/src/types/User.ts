export interface IUser {
    id: number;
    email: string;
    name: string;
}

export interface UsersState  {
    userInfo: {email: string, id: number, name: string}
    isAuth: boolean;
    error: string;
}


export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    FETCH_USERS_LOGOUT = 'FETCH_USERS_LOGOUT',    
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
    payload: {email: string, id: number, name: string}
}


interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
}

interface FetchUsersLogOutAction {
    type: UserActionTypes.FETCH_USERS_LOGOUT
}

export type UsersAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersLogOutAction 
