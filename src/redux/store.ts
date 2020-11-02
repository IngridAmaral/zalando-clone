import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { campaignBrandsReducer } from './reducers/campaignBrands';

const rootReducer = combineReducers({
  campaignBrands: campaignBrandsReducer,
});

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export type RootState = ReturnType<typeof rootReducer>;
