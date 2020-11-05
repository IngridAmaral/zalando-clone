import React from 'react';
import { TBrand } from '../../redux/types/campaignBrands';
import BrandCampaignBanner from './banner/BrandCampaignBanner';
import BrandCampaignSlider from './slider/BrandCampaignSlider';
import BrandCampaignFollow from './follow/BrandCampaignFollow';
import styles from './BrandCampaign.module.scss';

type BrandCampaignProps = {
  brand: TBrand;
};

const BrandCampaign: React.FC<BrandCampaignProps> = ({ brand }) => (
  <div className={styles.brandCampaignWrapper}>
    <BrandCampaignBanner brand={brand} />
    <div
      className={styles.bottomBrandCampaignContainer}
      style={{
        background: `${brand.cardsBackground}`,
        color: `${brand.fontColor}`,
      }}
    >
      <BrandCampaignSlider cards={brand.cards} brandName={brand.brandName} />
      <BrandCampaignFollow
        brandName={brand.brandName}
        fontColor={brand.fontColor}
      />
    </div>
  </div>
);

export default BrandCampaign;
