import { Reducer } from 'redux';
import {
  CampaignBrandsActionTypes,
  CampaignBrandsState,
} from '../types/campaignBrands';
import { Actions } from '../actions/campaignBrands';
import { RootState } from '../store';

export const initialState: CampaignBrandsState = {
  data: [],
  error: null,
  loading: false,
};

const reducer: Reducer<CampaignBrandsState, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CampaignBrandsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case CampaignBrandsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case CampaignBrandsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const getCampaignBrands = (
  state: RootState
): CampaignBrandsState['data'] => state.campaignBrands.data;

export { reducer as campaignBrandsReducer };
