import { GET_BRANDS } from '../types/brands';
import { TBrand } from '../../components/campaign-wrapper/CampaignWrapper';
import { RootState } from '../store';

export const initialState: TBrandsState = {
  isPending: false,
  brands: [],
  error: null,
};

export type TBrandsState = {
  isPending: boolean;
  brands: TBrand[];
  error: null | unknown;
};

export type TAction = {
  type: string;
  payload: TBrand[];
};

export default function brandsReducer(
  state: TBrandsState = initialState,
  action: TAction
): TBrandsState {
  console.log('action', action.type);

  switch (action.type) {
    case `${GET_BRANDS}_PENDING`:
      return { ...state, isPending: true };
    case `${GET_BRANDS}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        brands: action.payload,
      };
    case `${GET_BRANDS}_REJECTED`:
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
