import { TBrand } from '../redux/types/campaignBrands';
import { api } from '../api/api';

export const campaignBrands = async (): Promise<TBrand[]> => {
  const response = await api.get('campaignBrandsData');

  return response.data;
};
