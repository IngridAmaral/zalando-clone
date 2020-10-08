import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import CardCampaign from '../cardCampaign/CardCampaign';
import styles from './CardsCampaignSlider.module.scss';
import './CardsCampaignSlider.scss';
import { TCardData } from '../campaignWrapper/CampaignWrapper';

const SLIDER_OPTIONS = {
    perMove: 2,
    drag: true,
    keyBoard: true,
    pagination: false,
    arrows: false,
    isNavigation: true,
    breakpoints: {
        600: {
            perPage: 2.2,
        },
        1400: {
            perPage: 4.1,
        },
        1800: {
            perPage: 4.3,
        },
    },
};

type CardsCampaignSliderProps = {
    cards: TCardData[],
    brandName: string,
}

const CardsCampaignSlider = ({ cards, brandName }: CardsCampaignSliderProps) => (
    <div
        className={styles.sliderContainer}
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
