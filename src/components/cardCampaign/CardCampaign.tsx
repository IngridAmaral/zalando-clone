import React from 'react';
import styles from './CardCampaign.module.scss';
import { TCardData } from '../cardsCampaignSlider/CardsCampaignSlider';
import { addDecimal } from '../../utils/addDecimal';

type CardCampaignProps = {
    cardData: TCardData,
    brandName: string,
}

const renderPrice = (price: number, hasDifferentPrices: boolean = false) => (
    <span className={styles.priceTag}>
        { hasDifferentPrices ? `${addDecimal(price)} €` : `From ${addDecimal(price)} €`}
    </span>
)

const renderExtraInfo = (information: string) => (
    <span className={styles.extraInformation}>
        {information}
    </span>
)

const renderTextContent = (cardData: TCardData, brandName: string) => (
    <div className={styles.productInfos}>
        <div>
            <span className={styles.title}>{brandName}</span>
            <h3 className={styles.description}>{cardData.description}</h3>
        </div>
        {renderPrice(cardData.price, cardData.hasDifferentPrices)}
        {cardData.extraInformation && renderExtraInfo(cardData.extraInformation)}
    </div>
)

const CardCampaign = ({ cardData, brandName }: CardCampaignProps) => (
    <div
        className={styles.cardContainer}
    >
        <img
            className={styles.productImage}
            alt={cardData.description}
            src={cardData.productImageLink}
        />
        {renderTextContent(cardData, brandName)}
    </div>
);

export default CardCampaign;
