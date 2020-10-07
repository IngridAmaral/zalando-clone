import React from 'react';
import { campaignData } from '../../data/campaign-data';
import GoBack from '../../assets/svgs/goback';
import styles from './BannerCampaign.module.scss';

const { brandName, background, fontColor, subTitle, linkText, mainImg, text } = campaignData[0]

// type BannerCampaignProps = {
//     brandName: string,
//     background: string,
//     fontColor: string,
//     subTitle: string,
//     linkText: string,
//     mainImg: string,
//     text: string,
// }

const BannerCampaign = () => (
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
                <GoBack />
            </div>
        </div>
        <div className={styles.imageWrapper}>
            <img src={mainImg} alt={text} className={styles.mainImage} />
        </div>
    </div>
);

export default BannerCampaign;
