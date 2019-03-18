import jwtDecode from 'jwt-decode';
import { REGISTER_USER } from './Register/actions';
import { RegisterUserAction } from './Register/actions';
import { LoginUserAction, LOGIN_USER, LOGOUT_USER, LogoutUserAction } from './Login/actions';

let cachedToken = localStorage.getItem('token');

export type UserState = {
    token?: string;
    userName?: string;
    userRole?: string;
    isAuthenticated?: boolean;
    isRegistered?: boolean;
    isLoading?: boolean;
    statusText?: string;
    hasFailed?: boolean;
};

const initialState: UserState = {
    userName: cachedToken != null ? jwtDecode<any>(cachedToken).unique_name : null,
    userRole: cachedToken != null ? jwtDecode<any>(cachedToken).role : null,
    isAuthenticated: (cachedToken != null) ? true : false,
    isRegistered: false,
    isLoading: false,
};

export type User = {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
};

type ActionType = RegisterUserAction | LoginUserAction | LogoutUserAction;

export const reducer = (state: UserState = initialState, action: ActionType): UserState => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                token: action.token,
                isAuthenticated: true,
                userName: jwtDecode<any>(action.token).unique_name,
                statusText: 'You have been successfully logged in'
            }
        }
        case LOGOUT_USER: {
            return {
                ...state,
                token: undefined,
                isAuthenticated: false,
                userName: undefined,
                statusText: 'You have been successfully logged out.'
            }
        }
        case REGISTER_USER: {
            return {
                ...state,
                userName: action.user.username,
                isRegistered: true
            }
        }
        default:
            return state;
    }
};