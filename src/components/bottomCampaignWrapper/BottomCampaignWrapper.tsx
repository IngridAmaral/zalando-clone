import React from 'react';
import CardsCampaignSlider from '../cardsCampaignSlider/CardsCampaignSlider';
import FollowBrandCampaign from '../followBrandCampaign/FollowBrandCampaign';
import { TCardData } from '../campaignWrapper/campaignWrapper';
import styles from './BottomCampaignWrapper.module.scss';


type BottomCampaignWrapperProps = {
    cards: TCardData[],
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
