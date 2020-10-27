import { api } from '../api/api';
import { TBrand } from '../components/campaign-wrapper/CampaignWrapper';

export const campaign = async (): Promise<TBrand[]> => {
  const response = await api.get('campaign-data');
  return response.data;
};
