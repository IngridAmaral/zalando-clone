import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import CardCampaign from '../cardCampaign/CardCampaign';
import styles from './CardsCampaignSlider.module.scss';
import './CardsCampaignSlider.scss';
import { TCardData } from '../bottomCampaignWrapper/BottomCampaignWrapper';

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
