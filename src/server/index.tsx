import { Server } from 'miragejs';
import { campaignData } from './data/campaign-data';

export const createServer = (): void => {
  new Server({
    routes() {
      this.namespace = '/';
      this.get('brands', () => campaignData);
    },
  });
};
