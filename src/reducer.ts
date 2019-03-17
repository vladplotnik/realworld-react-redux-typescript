import { combineReducers } from 'redux'
import { reducer as feedReducer, FeedState } from './pages/Feed/reducer';

export interface AppState {
    feed: FeedState;
}

const rootReducer = combineReducers<AppState>({
    feed: feedReducer
});

export default rootReducer;
