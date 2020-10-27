import { campaign } from '../../service/campaign';
import { GET_CAMPAIGN } from '../action-types/types';
import { Action } from 'redux';
import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';

const brandsAC = (): ThunkAction<void, RootState, unknown, Action<string>> => (
  dispatch
) => {
  try {
    dispatch({
      type: GET_CAMPAIGN,
      payload: campaign(),
    });
  } catch (e) {
    // Log error to server
  }
};

export default brandsAC;
