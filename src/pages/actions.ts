export interface Action<Type = string> { type: Type };

export const GET_ACTION_FAILURE = 'GET_ACTION_FAILURE';
export const POST_ACTION_FAILURE = 'POST_ACTION_FAILURE';

export const getActionFailed = (error: Response) => {
    return {
        type: GET_ACTION_FAILURE,
        error: error
    };
};

export const postActionFailed = (error: Response) => {
    return {
        type: POST_ACTION_FAILURE,
        error: error
    };
};