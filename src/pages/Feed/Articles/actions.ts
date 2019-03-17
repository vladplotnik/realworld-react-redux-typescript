import { fetchApi } from '../../../api';
import { getActionFailed, Action } from '../../actions';
import { Article } from '../reducer';

export const GET_ARTICLES = 'GET_ARTICLES';

export interface GetArticlesAction extends Action<typeof GET_ARTICLES> {
    articles: Article[];
}

export const getArticlesSuccess = (articles: Article[]): GetArticlesAction => {
    return {
        type: GET_ARTICLES,
        articles
    };
}

export const getArticles = (limit: number) => {
    return (dispatch: any) => {
        fetchApi(`/articles?limit=${limit}`)
            .then((response) => response.json())
            .then((response) => dispatch(getArticlesSuccess(response.articles)))
            .catch((error: any) => {
                dispatch(getActionFailed(error.response));
            });
    };
};
