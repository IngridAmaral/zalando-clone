import { api } from '../api/api';
import { TBrand } from '../components/campaign-wrapper/CampaignWrapper';

export const campaignBrands = async (): Promise<TBrand[]> => {
  const response = await api.get('brands');
  console.log('response', response.data);

  return response.data;
};
