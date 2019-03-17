import { fetchApi } from "../../../api";
import { User } from "../reducer";
import { Action, postActionFailed } from "../../actions";

export const REGISTER_USER = 'REGISTER_USER';

export interface RegisterUserAction extends Action<typeof REGISTER_USER> {
    user: User;
}

const registerUserSuccess = (user: User): RegisterUserAction => {
    return {
        type: REGISTER_USER,
        user: user
    };
};

export const registerUser = (user: User) => {
    return (dispatch: any) => {
        fetchApi(`/users`, user, 'post')
            .then(() => dispatch(registerUserSuccess(user)))
            .catch((error: any) => {
                dispatch(postActionFailed(error.response));
            });
    };
};