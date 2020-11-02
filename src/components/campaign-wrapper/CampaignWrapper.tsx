import React from 'react';
import { TBrand } from '../../redux/types/campaignBrands';
import BannerCampaign from '../banner-campaign/BannerCampaign';
import BottomCampaignWrapper from '../bottom-campaign-wrapper/BottomCampaignWrapper';
import styles from './CampaignWrapper.module.scss';

type CampaignWrapperProps = {
  brand: TBrand;
};

const CampaignWrapper: React.FC<CampaignWrapperProps> = ({ brand }) => (
  <div className={styles.campaignWrapper}>
    <BannerCampaign brand={brand} />
    <BottomCampaignWrapper brand={brand} />
  </div>
);

export default CampaignWrapper;
