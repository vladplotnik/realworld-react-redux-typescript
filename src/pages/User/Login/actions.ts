import { fetchApi } from "../../../api";
import { Action, saveActionFailed } from "../../actions";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export interface LoginUserAction extends Action<typeof LOGIN_USER> {
    token: string
}

export interface LogoutUserAction extends Action<typeof LOGOUT_USER> {
}

const loginUserSuccess = (token: string): LoginUserAction => {
    localStorage.setItem('token', token);
    return {
        type: LOGIN_USER,
        token
    };
};

export const loginUser = (username: string, password: string) => {
    var credentials = {
        'username': username,
        'password': password,
        'grant_type': 'password'
    };
    return (dispatch: any) => {
        fetchApi(`/users/login`, credentials, 'post')
            .then((response) => response.json())
            .then((response) => dispatch(loginUserSuccess(response.access_token)))
            .catch((error: any) => {
                dispatch(saveActionFailed(error.response.status, error.message));
            });
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: LOGOUT_USER
    };
};