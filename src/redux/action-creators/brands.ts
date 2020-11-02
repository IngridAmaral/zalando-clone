import { Action } from 'redux';
import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';
import { getBrandsAction } from '../actions/brands';

export const fetchBrandsAC = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => (dispatch) => dispatch(getBrandsAction);
