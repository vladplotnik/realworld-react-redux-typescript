import { fetchApi } from '../../../api';
import { getActionFailed, Action, deleteActionFailed } from '../../actions';
import { Article } from '../reducer';

export enum GET_ARTICLE {
    REQUEST = 'REQUEST',
    SUCCESS = 'SUCCESS',
}

export enum DELETE_ARTICLE {
    REQUEST = 'REQUEST',
    SUCCESS = 'SUCCESS',
}

export interface GetArticleRequestAction extends Action<typeof GET_ARTICLE.REQUEST> {
    article?: Article;
}

export const getArticleRequest = (): GetArticleRequestAction => {
    return {
        type: GET_ARTICLE.REQUEST,
        article: undefined
    };
}

export interface GetArticleSuccessAction extends Action<typeof GET_ARTICLE.SUCCESS> {
    article: Article;
    test: string;
}

export interface DeleteArticleAction extends Action<typeof DELETE_ARTICLE.SUCCESS> {
}

export const getArticleSuccess = (article: Article): GetArticleSuccessAction => {
    return {
        type: GET_ARTICLE.SUCCESS,
        article,
        test: ''
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
        type: DELETE_ARTICLE.SUCCESS
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
