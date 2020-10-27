import { GET_CAMPAIGN } from '../action-types/types';
import { TBrand } from '../../components/campaign-wrapper/CampaignWrapper';
import { RootState } from '../store';

export const initialState = {
  isPending: false,
  brands: [],
  error: null,
};

export type TCampaignReducer = {
  isPending: boolean;
  brands: TBrand[];
  error: null | unknown;
};

export default function campaignReducer(
  state = initialState,
  action = { type: '', payload: [] }
): TCampaignReducer {
  switch (action.type) {
    case `${GET_CAMPAIGN}_PENDING`:
      return { ...state, isPending: true };
    case `${GET_CAMPAIGN}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        brands: action.payload,
      };
    case `${GET_CAMPAIGN}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const getBrands = (state: RootState): TBrand[] => state.brands.brands;
export const getBrandsPending = (state: RootState): boolean =>
  state.brands.isPending;
export const getBrandsError = (state: RootState): null | unknown =>
  state.brands.error;
