import React from 'react';
import Go from '../../assets/svgs/GoBack';
import styles from './BannerCampaign.module.scss';

type BannerCampaignProps = {
    brandName: string,
    background: string,
    fontColor: string,
    subTitle: string,
    linkText: string,
    mainImg: string,
}

const BannerCampaign = ({ brandName, background, fontColor, subTitle, linkText, mainImg }: BannerCampaignProps) => (
    <div
        className={styles.bannerCampaignContainer}
        style={{
            background: `${background}`,
            color: `${fontColor}`
        }}
    >
        <div className={styles.textContent}>
            <div className={styles.title}>
                <h2 className={styles.brand}>{brandName}</h2>
                <h2 className={styles.subTitle}>{subTitle}</h2>
            </div>

            <div className={styles.link}>
                <span>{linkText}</span>
                <Go color={fontColor}/>
            </div>
        </div>
        <div className={styles.imageWrapper}>
            <img src={mainImg} alt={brandName} className={styles.mainImage} />
        </div>
    </div>
);

export default BannerCampaign;
