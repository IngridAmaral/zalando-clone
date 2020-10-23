import React from 'react';
import Follow from '../../assets/svgs/Close';
import styles from './FollowBrandCampaign.module.scss';

type FollowBrandCampaignProps = {
  brandName: string;
  fontColor: string;
};

const FollowBrandCampaign = ({
  brandName,
  fontColor,
}: FollowBrandCampaignProps) => (
  <div className={styles.followBrandContainer}>
    <button
      className={styles.followBrand}
      style={{
        color: `${fontColor}`,
        boxShadow: `inset 0 0 0 1px ${fontColor}`,
      }}
      type="button"
    >
      <Follow color={fontColor} />
      Follow
    </button>
    {brandName}
  </div>
);

export default FollowBrandCampaign;
