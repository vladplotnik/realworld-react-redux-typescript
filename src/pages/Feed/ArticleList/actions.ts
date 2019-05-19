import { fetchApi } from '../../../api';
import { getActionFailed, Action } from '../../actions';
import { Article } from '../reducer';

export const GET_ARTICLES_REQUEST = 'GET_ARTICLES_REQUEST';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';

export interface GetArticlesRequestAction extends Action<typeof GET_ARTICLES_REQUEST> {
    pageNumber: number;
}

export interface GetArticlesAction extends Action<typeof GET_ARTICLES_SUCCESS> {
    articles: Article[];
}

export const getArticlesRequest = (pageNumber: number): GetArticlesRequestAction => {
    return {
        type: GET_ARTICLES_REQUEST,
        pageNumber
    };
}

export const getArticlesSuccess = (articles: Article[]): GetArticlesAction => {
    return {
        type: GET_ARTICLES_SUCCESS,
        articles
    };
}

export const getArticles = (pageLimit: number, pageNumber: number) => {
    return (dispatch: any) => {
        dispatch(getArticlesRequest(pageNumber));
        fetchApi(`/articles?limit=${pageLimit}&offset=${pageNumber ? pageNumber * pageLimit : 0}`)
            .then((response) => response.json())
            .then((response) => dispatch(getArticlesSuccess(response.articles)))
            .catch((error: any) => {
                dispatch(getActionFailed(error.response));
            });
    };
};
