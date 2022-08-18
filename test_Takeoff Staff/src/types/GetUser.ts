export interface IUser {
    id: number;
    email: string;
    name: string;
}

export interface GetUsersState  {
    users: IUser[]
}

export enum GetUserActionTypes {
    FETCH_GET_USERS = 'FETCH_GET_USERS',
    ADD_USERS = 'ADD_USERS',
    PUT_USERS = 'PUT_USERS',
}


interface FetchGetUsersAction {
    type: GetUserActionTypes.FETCH_GET_USERS;
    payload: IUser[]
}

interface SetAddUser {
    type: GetUserActionTypes.ADD_USERS,
    payload: IUser
}

interface SetPutUser {
    type: GetUserActionTypes.PUT_USERS,
    payload: IUser
}



export type GetUsersAction =  FetchGetUsersAction | SetAddUser | SetPutUser