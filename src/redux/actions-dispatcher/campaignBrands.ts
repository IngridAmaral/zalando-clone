import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  Actions,
} from '../actions/campaignBrands';
import { campaignBrands } from '../../service/campaignBrandsService';

export const fetchBrandsDispatcher = (): ThunkAction<
  void,
  RootState,
  unknown,
  Actions
> => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const brands = await campaignBrands();
    dispatch(fetchSuccess(brands));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
