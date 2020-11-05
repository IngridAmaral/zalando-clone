import React from 'react';
import Go from '../../../assets/svgs/Goback';
import { TBrand } from '../../../redux/types/campaignBrands';
import styles from './BrandCampaignBanner.module.scss';

type BrandCampaignBannerProps = {
  brand: TBrand;
};

const BrandCampaignBanner: React.FC<BrandCampaignBannerProps> = ({ brand }) => {
  const {
    brandName,
    background,
    fontColor,
    subTitle,
    linkText,
    mainImg,
  } = brand;

  return (
    <div
      className={styles.brandCampaignBannerContainer}
      style={{
        background: `${background}`,
        color: `${fontColor}`,
      }}
    >
      <div className={styles.textContent}>
        <div className={styles.title}>
          <h2 className={styles.brand}>{brandName}</h2>
          <h2 className={styles.subTitle}>{subTitle}</h2>
        </div>

        <div className={styles.link}>
          <span>{linkText}</span>
          <Go color={fontColor} />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={mainImg} alt={brandName} className={styles.mainImage} />
      </div>
    </div>
  );
};

export default BrandCampaignBanner;
