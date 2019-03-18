import { fetchApi } from '../../../api';
import { getActionFailed, Action, deleteActionFailed } from '../../actions';
import { Article } from '../reducer';

export const GET_ARTICLE = 'GET_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

export interface GetArticleAction extends Action<typeof GET_ARTICLE> {
    article: Article;
}

export interface DeleteArticleAction extends Action<typeof DELETE_ARTICLE> {
}

export const getArticleSuccess = (article: Article): GetArticleAction => {
    return {
        type: GET_ARTICLE,
        article
    };
}

export const getArticle = (slug: string) => {
    return (dispatch: any) => {
        fetchApi(`/articles/${slug}`)
            .then((response) => response.json())
            .then((response) => dispatch(getArticleSuccess(response.article)))
            .catch((error: any) => {
                dispatch(getActionFailed(error.response));
            });
    };
};

export const deleteArticleSuccess = (): DeleteArticleAction => {
    return {
        type: DELETE_ARTICLE
    };
}

export const deleteArticle = (slug: string) => {
    return (dispatch: any) => {
        fetchApi(`/articles/${slug}`, {}, 'delete')
            .then((response) => response.json())
            .then((response) => dispatch(deleteArticleSuccess()))
            .catch((error: any) => {
                dispatch(deleteActionFailed(error.response));
            });
    };
};
