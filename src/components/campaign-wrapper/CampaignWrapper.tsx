import React from 'react';
import BannerCampaign from '../banner-campaign/BannerCampaign';
import BottomCampaignWrapper from '../bottom-campaign-wrapper/BottomCampaignWrapper';
import styles from './campaignWrapper.module.scss';

export type TCard = {
    id: string,
    description: string,
    price: number,
    productImageLink: string,
    isNew?: boolean,
    hasSustainabilityFlag?: boolean,
    hasDifferentPrices?: boolean,
    extraInformation?: string,
}

export type TBrand = {
    brandName: string,
    background: string,
    fontColor: string,
    subTitle: string,
    linkText: string,
    mainImg: string,
    text: string,
    cards: TCard[],
    cardsBackground: string
}

type CampaignWrapperProps = {
    brand: TBrand
}

const CampaignWrapper = ({ brand }: CampaignWrapperProps) => (
    <div className={styles.campaignWrapper}>
        <BannerCampaign
            brand={brand}
        />
        <BottomCampaignWrapper
            brand={brand}
        />
    </div>
);


export default CampaignWrapper;
