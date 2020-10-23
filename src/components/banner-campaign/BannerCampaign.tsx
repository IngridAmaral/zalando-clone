import React from 'react';
import Go from '../../assets/svgs/GoBack';
import { TBrand } from '../campaign-wrapper/CampaignWrapper';
import styles from './BannerCampaign.module.scss';

type BannerCampaignProps = {
  brand: TBrand;
};

const BannerCampaign = ({ brand }: BannerCampaignProps) => {
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
      className={styles.bannerCampaignContainer}
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

export default BannerCampaign;
