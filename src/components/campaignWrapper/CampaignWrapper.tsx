import React from 'react';
import BannerCampaign from '../bannerCampaign/BannerCampaign';
import BottomCampaignWrapper from '../bottomCampaignWrapper/BottomCampaignWrapper';
import styles from './campaignWrapper.module.scss';

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

type TBrand = {
    brandName: string,
    background: string,
    fontColor: string,
    subTitle: string,
    linkText: string,
    mainImg: string,
    text: string,
    cards: TCardData[],
    cardsBackground: string
}

type CampaignWrapperProps = {
    brand: TBrand
}

const CampaignWrapper = ({ brand }: CampaignWrapperProps) => {
    const {
        brandName,
        background,
        fontColor,
        subTitle,
        linkText,
        mainImg,
        text,
        cards,
        cardsBackground
    } = brand;

    return (
        <div className={styles.campaignWrapper}>
            <BannerCampaign
                brandName={brandName}
                background={background}
                fontColor={fontColor}
                subTitle={subTitle}
                linkText={linkText}
                mainImg={mainImg}
                text={text}
            />
            <BottomCampaignWrapper
                cards={cards}
                brandName={brandName}
                cardsBackground={cardsBackground}
                fontColor={fontColor}
            />
        </div>
    )
}

export default CampaignWrapper;
