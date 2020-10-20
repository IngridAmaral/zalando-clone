import React from 'react';
import CardsCampaignSlider from '../cards-campaign-slider/CardsCampaignSlider';
import FollowBrandCampaign from '../follow-brand-campaign/FollowBrandCampaign';
import { TCard } from '../campaign-wrapper/campaignWrapper';
import styles from './BottomCampaignWrapper.module.scss';


type BottomCampaignWrapperProps = {
    cards: TCard[],
    brandName: string,
    cardsBackground: string,
    fontColor: string,
}

const BottomCampaignWrapper = ({ brandName, fontColor, cards, cardsBackground }: BottomCampaignWrapperProps) => (
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
