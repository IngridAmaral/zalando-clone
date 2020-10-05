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

const cards: Array<TCardData> = campaignData[0].cards;
const brandName = campaignData[0].brandName;
const fontColor = campaignData[0].fontColor;
const background = campaignData[0].background;

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
        className={styles.followBrandContainer}
        style={{
            background: `${background}`,
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
