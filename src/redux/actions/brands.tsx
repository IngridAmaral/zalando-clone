import { campaignBrands } from '../../service/brandsService';
import { GET_BRANDS } from '../types/brands';

export const brandsAction = {
  type: GET_BRANDS,
  payload: campaignBrands(),
};
