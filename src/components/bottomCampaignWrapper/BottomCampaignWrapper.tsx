import React from 'react';
import { campaignData } from '../../data/campaign-data';
import CardsCampaignSlider from '../cardsCampaignSlider/CardsCampaignSlider';
import FollowBrandCampaign from '../followBrandCampaign/FollowBrandCampaign';
import styles from './BottomCampaignWrapper.module.scss';

// type campaignBrand = {
//     brandName: string,
//     subTitle: string,
//     text: string,
//     linkText: string,
//     background: string,
//     mainImg: string,
//     cardsBackground: string,
//     fontColor: string,
//     id: string,
//     cards: Array<TCardData>
// }

const { brandName, fontColor, cards, cardsBackground } = campaignData[0];

export type TCardData = {
    id: string,
    description: string,
    price: number,
    productImageLink: string,
    isNew?: boolean,
    hasSustainabilityFlag?: boolean,
    hasDifferentPrices?: boolean,
    extraInformation?: string,
}

// type BottomCampaignWrapperProps = {
//     cards: TCardData[],
//     brandName: string,
//     background: string,
//     fontColor: string,
// }

const BottomCampaignWrapper = () => (
    <div 
        className={styles.bottomCampaignContainer}
        style={{
            background: `${cardsBackground}`,
            color: `${fontColor}`
        }}
    >
        <CardsCampaignSlider
            cards={cards}
            brandName={brandName}
        />
        <FollowBrandCampaign brandName={brandName} fontColor={fontColor} />
    </div>
);

export default BottomCampaignWrapper;
