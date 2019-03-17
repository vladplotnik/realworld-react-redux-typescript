import { GetTagsAction, GET_TAGS } from './Tags/actions';
import { GetArticlesAction, GET_ARTICLES } from './Articles/actions';

export type FeedState = {
    articles: Article[];
    tags: string[];
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

type ActionType = GetTagsAction | GetArticlesAction;

export const reducer = (state: FeedState = initialState, action: ActionType) => {
    switch (action.type) {
        case GET_ARTICLES: {
            return {
                ...state,
                articles: action.articles,
            }
        }
        case GET_TAGS: {
            return {
                ...state,
                tags: action.tags,
            }
        }
    }

    return state
}
