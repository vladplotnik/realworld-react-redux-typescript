import { GetTagsAction, GET_TAGS } from './Tags/actions';
import { GetArticlesAction, GET_ARTICLES_SUCCESS, GET_ARTICLES_REQUEST, GetArticlesRequestAction } from './ArticleList/actions';
import { GetArticleRequestAction, GetArticleSuccessAction, DeleteArticleAction, GET_ARTICLE, DELETE_ARTICLE } from './Article/actions';

export type FeedState = {
    articles: Article[];
    tags: string[];
    currentArticle?: Article;
    pageNumber: number;
    pageLimit: number;
};

const initialState: FeedState = {
    articles: [],
    tags: [],
    pageNumber: 1,
    pageLimit: 10
};

export type Article = {
    title: string;
    slug: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    tagList: string[];
    description: string;
    author: {
        username: string;
        bio: string | null;
        image: string;
        following: boolean;
    };
    favorited: boolean;
    favoritesCount: number;
};

type ActionType = GetTagsAction | GetArticlesRequestAction | GetArticlesAction | GetArticleRequestAction | GetArticleSuccessAction | DeleteArticleAction;

export const reducer = (state: FeedState = initialState, action: ActionType) => {
    switch (action.type) {
        case GET_ARTICLES_REQUEST: {
            return {
                ...state,
                pageNumber: action.pageNumber,
            };
        }
        case GET_ARTICLES_SUCCESS: {
            return {
                ...state,
                articles: action.articles,
            };
        }
        case GET_TAGS: {
            return {
                ...state,
                tags: action.tags,
            };
        }
        case GET_ARTICLE.REQUEST: {
            return {
                ...state,
                currentArticle: action.article,
            };
        }
        case GET_ARTICLE.SUCCESS: {
            return {
                ...state,
                currentArticle: action.article,
            };
        }
        case DELETE_ARTICLE.SUCCESS: {
            return {
                ...state,
                redirectTo: '/'
            };
        }
        default:
            // the code below will check that all actions were reduced
            const exhaustiveCheck: never = action;
    }

    return state;
};
