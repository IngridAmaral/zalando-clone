import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import CardBrandItem from './card/CardBrandItem';
import styles from './BrandCampaignSlider.module.scss';
import './BrandCampaignSlider.scss';
import { TCard } from '../../../redux/types/campaignBrands';

const SLIDER_OPTIONS = {
  perMove: 2,
  drag: true,
  keyBoard: true,
  rewind: true,
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
      perPage: 4.4,
    },
  },
};

type BrandCampaignSliderProps = {
  cards: TCard[];
  brandName: string;
};

const BrandCampaignSlider: React.FC<BrandCampaignSliderProps> = ({
  cards,
  brandName,
}) => (
  <div className={styles.sliderContainer}>
    <Splide options={SLIDER_OPTIONS}>
      {cards.map((card) => (
        <SplideSlide key={card.id}>
          <CardBrandItem card={card} brandName={brandName} />
        </SplideSlide>
      ))}
    </Splide>
  </div>
);

export default BrandCampaignSlider;
