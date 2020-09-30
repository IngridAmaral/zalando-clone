import React from 'react';
import styles from './CardCampaign.module.scss';
import { campaignData } from '../Data/campaign-data';

const exempleCard = campaignData[0].cards[0];
const exempleBrand = campaignData[0].brandTitle;

const addDecimal = (price: number) => Number.isInteger(price) ? `${price.toString()}.00` : price;

const renderPrice = (price: number, hasDifferentPrices: boolean = false) => (
    <span className={styles.priceTag}>
        { hasDifferentPrices ? `${addDecimal(price)} €` : `From ${addDecimal(price)} €` }
    </span>
)

const renderExtraInfo = (information: string) => (
    <span className={styles.extraInformation}>
        {information}
    </span>
)

const renderText = () => (
    <div className={styles.productInfos}>
        <div>
            <span className={styles.title}>{exempleBrand}</span>
            <h3 className={styles.description}>{exempleCard.description}</h3>
        </div>
        {renderPrice(exempleCard.price, exempleCard.hasDifferentPrices)}
        {exempleCard.extraInfos && renderExtraInfo(exempleCard.extraInformation)}
    </div>
)

const CardCampaign = () => (
    <div
        className={styles.cardContainer}
        style={{
            background: `${campaignData[0].cardsBackground}`,
            color: `${campaignData[0].fontColor}`
        }}
    >
        <img 
            className={styles.productImage}
            alt={exempleCard.description} 
            src={exempleCard.productImageLink} 
        />
       {renderText()}
    </div>
);

export default CardCampaign;
