import React from 'react';
import Follow from '../../../assets/svgs/Close';
import styles from './BrandCampaignFollow.module.scss';

type BrandCampaignFollowProps = {
  brandName: string;
  fontColor: string;
};

const BrandCampaignFollow: React.FC<BrandCampaignFollowProps> = ({
  brandName,
  fontColor,
}) => (
  <div className={styles.followContainer}>
    <button
      className={styles.follow}
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

export default BrandCampaignFollow;
