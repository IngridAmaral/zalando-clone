import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import brandsReducer from './reducers/brands';

const rootReducer = combineReducers({
  brands: brandsReducer,
});

const middlewares = [thunk, promise];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export type RootState = ReturnType<typeof rootReducer>;
