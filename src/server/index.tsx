import { Server } from 'miragejs';
import { campaignBrandsData } from './data/campaign-brands-data';

export const createServer = (): void => {
  new Server({
    routes() {
      this.namespace = '/';
      this.get('campaignBrandsData', () => campaignBrandsData);
    },
  });
};
