import { CampaignBrandsActionTypes, TBrand } from '../types/campaignBrands';
import { createAction } from '../helper/action';
import { IAction, IActionPayload } from '../helper/action';

export const fetchRequest = (): IAction<
  CampaignBrandsActionTypes.FETCH_REQUEST
> => createAction(CampaignBrandsActionTypes.FETCH_REQUEST);

export const fetchSuccess = (
  brands: TBrand[]
): IActionPayload<CampaignBrandsActionTypes.FETCH_SUCCESS, TBrand[]> =>
  createAction(CampaignBrandsActionTypes.FETCH_SUCCESS, brands);

export const fetchError = (
  error: Error
): IActionPayload<CampaignBrandsActionTypes.FETCH_ERROR, Error> =>
  createAction(CampaignBrandsActionTypes.FETCH_ERROR, error);

export type Actions =
  | ReturnType<typeof fetchRequest>
  | ReturnType<typeof fetchSuccess>
  | ReturnType<typeof fetchError>;
