export const GET_ACTION_FAILURE = 'GET_ACTION_FAILURE';
export const SAVE_ACTION_FAILURE = 'SAVE_ACTION_FAILURE';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export interface Action<Type> { type: Type };

export interface GetActionFailedAction extends Action<typeof GET_ACTION_FAILURE> {
    statusText: string;
    status: number;
}

export const getActionFailed = (error: Response): GetActionFailedAction => {
    return {
        type: GET_ACTION_FAILURE,
        statusText: error ? error.statusText : '',
        status: error ? error.status: 0
    };
};

export interface SaveActionFailedAction extends Action<typeof SAVE_ACTION_FAILURE> {
    statusText: string;
    status: number;
}

export const saveActionFailed = (status: number, message: string): SaveActionFailedAction => {
    return {
        type: SAVE_ACTION_FAILURE,
        statusText: message,
        status: status
    };
};

export interface ClearErrorsAction extends Action<typeof CLEAR_ERRORS> { }
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};