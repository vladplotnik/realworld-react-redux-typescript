import { combineReducers } from 'redux'
import { reducer as feedReducer, FeedState } from './pages/Feed/reducer';
import { reducer as userReducer, UserState } from './pages/User/reducer';

export interface AppState {
    feed: FeedState;
    user: UserState;
}

const rootReducer = combineReducers<AppState>({
    feed: feedReducer,
    user: userReducer
});

export default rootReducer;
