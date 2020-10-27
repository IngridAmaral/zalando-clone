import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { StateType, ActionType } from 'typesafe-actions';
import campaignReducer from './reducers/campaign';

export type Store = StateType<typeof import('../App').default>;
export type RootAction = ActionType<
  typeof import('./actions/get-campaign-data').default
>;
// export type RootState = StateType<
//   ReturnType<typeof import('./reducers/campaign').default>
// >;

const rootReducer = combineReducers({
  campaign: campaignReducer,
});

const middlewares = [thunk, promise];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export type RootState = ReturnType<typeof rootReducer>;
