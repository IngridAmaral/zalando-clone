import React from 'react';
import CardsCampaignSlider from '../cards-campaign-slider/CardsCampaignSlider';
import FollowBrandCampaign from '../follow-brand-campaign/FollowBrandCampaign';
import styles from './BottomCampaignWrapper.module.scss';
import { TBrand } from '../../redux/types/campaignBrands';

type BottomCampaignWrapperProps = {
  brand: TBrand;
};

const BottomCampaignWrapper: React.FC<BottomCampaignWrapperProps> = ({
  brand,
}) => {
  const { brandName, fontColor, cards, cardsBackground } = brand;

  return (
    <div
      className={styles.bottomCampaignContainer}
      style={{
        background: `${cardsBackground}`,
        color: `${fontColor}`,
      }}
    >
      <CardsCampaignSlider cards={cards} brandName={brandName} />
      <FollowBrandCampaign brandName={brandName} fontColor={fontColor} />
    </div>
  );
};

export default BottomCampaignWrapper;
