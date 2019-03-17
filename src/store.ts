import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const thunkMiddleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    thunkMiddleware.push(createLogger() as any);
}

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(...thunkMiddleware)
    );
}
