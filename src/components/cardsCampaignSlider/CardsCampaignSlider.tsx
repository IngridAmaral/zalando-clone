import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import CardCampaign from '../cardCampaign/CardCampaign';
import styles from './CardsCampaignSlider.module.scss';
import './CardsCampaignSlider.scss';
import { campaignData } from '../../data/campaign-data';

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

const SLIDER_OPTIONS = {
    perMove: 2,
    rewind: false,
    drag: true,
    type: 'loop',
    keyBoard: true,
    pagination: false,
    arrows: false,
    breakpoints: {
        600: {
            perPage: 2.2,
            cover: false,
        },
        768: {
            perPage: 3.2,
            cover: false,
        },
        992: {
            perPage: 4,
            cover: false,
        },
        1200: {
            perPage: 5,
            cover: false,
        },
    },
};

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

const cards: Array<TCardData> = campaignData[0].cards;
const brandName = campaignData[0].brandName;
const fontColor = campaignData[0].fontColor;
const background = campaignData[0].background

const CardsCampaignSlider = () => (
    <div
        className={styles.sliderContainer}
        style={{
            background: `${background}`,
            color: `${fontColor}`
        }}
    >
        <Splide options={SLIDER_OPTIONS}>
            {cards.map((card) => (
                <SplideSlide key={card.id}>
                    <CardCampaign
                        cardData={card}
                        brandName={brandName}
                    />
                </SplideSlide>
            ))}
        </Splide>
    </div>
);

export default CardsCampaignSlider;
