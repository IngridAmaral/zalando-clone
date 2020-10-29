import { campaignBrands } from '../../service/brandsService';
import { GET_BRANDS } from '../types/brands';
import { createAction } from '../helper/action';

export const getBrandsAction = createAction(GET_BRANDS, campaignBrands());

export type TBrandActions = typeof getBrandsAction;
