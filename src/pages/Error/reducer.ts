import { CLEAR_ERRORS, GET_ACTION_FAILURE, SAVE_ACTION_FAILURE, GetActionFailedAction, SaveActionFailedAction, ClearErrorsAction } from '../actions';

export interface ErrorState {
    isError: boolean;
    errorMessage?: string;
    errorCode?: number;
}

const initialState: ErrorState = {
    isError: false
};

type ActionType = GetActionFailedAction | SaveActionFailedAction | ClearErrorsAction;

export const reducer = (state: ErrorState = initialState, action: ActionType) => {
    switch (action.type) {
        case GET_ACTION_FAILURE:
            return {
                ...state,
                isError: true,
                errorMessage: action.statusText,
                errorCode: action.status
            }
        case SAVE_ACTION_FAILURE:
            return {
                ...state,
                isError: true,
                errorMessage: action.statusText,
                errorCode: action.status
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                isError: false,
                errorMessage: undefined,
                errorCode: undefined
            }

        default:
            // the code below will check that all actions were reduced
            const exhaustiveCheck: never = action;
    }

    return state;
};