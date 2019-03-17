import { fetchApi } from '../../../api';
import { getActionFailed, Action } from '../../actions';

export const GET_TAGS = 'GET_TAGS';

export interface GetTagsAction extends Action<typeof GET_TAGS> {
    tags: string[];
}

export const getTagsSuccess = (tags: string[]): GetTagsAction => {
    return {
        type: GET_TAGS,
        tags
    };
}

export const getTags = () => {
    return (dispatch: any) => {
        fetchApi(`/tags`)
            .then((response) => response.json())
            .then((response) => dispatch(getTagsSuccess(response.tags)))
            .catch((error: any) => {
                dispatch(getActionFailed(error.response));
            });
    };
};
