import { GetTagsAction, GET_TAGS } from './Tags/actions';
import { GetArticlesAction, GET_ARTICLES } from './ArticleList/actions';
import { GetArticleAction, DeleteArticleAction, GET_ARTICLE, DELETE_ARTICLE } from './Article/actions';

export type FeedState = {
    articles: Article[];
    tags: string[];
    currentArticle?: Article;
};

const initialState: FeedState = {
    articles: [],
    tags: []
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

type ActionType = GetTagsAction | GetArticlesAction | GetArticleAction | DeleteArticleAction;

export const reducer = (state: FeedState = initialState, action: ActionType) => {
    switch (action.type) {
        case GET_ARTICLES: {
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
        case GET_ARTICLE: {
            return {
                ...state,
                currentArticle: action.article,
            };
        }
        case DELETE_ARTICLE: {
            return {
                ...state,
                redirectTo: '/'
            };
        }
    }

    return state;
};
