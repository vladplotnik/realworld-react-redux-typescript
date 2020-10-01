import { combineReducers } from 'redux'
import { reducer as feedReducer, FeedState } from './pages/Feed/reducer';
import { reducer as userReducer, UserState } from './pages/User/reducer';
import { reducer as errorReducer, ErrorState } from './pages/Error/reducer';

export interface AppState {
    feed: FeedState;
    user: UserState;
    error: ErrorState;
}

const rootReducer = combineReducers<AppState>({
    feed: feedReducer,
    user: userReducer,
    error: errorReducer
});

export default rootReducer;
