import React from 'react';
import styles from './CardCampaign.module.scss';
import Wish from '../../assets/svgs/Wish';
import FlagCampaign from '../flag-campaign/FlagCampaign';
import { TCardData } from '../campaign-wrapper/CampaignWrapper';
import { addDecimal } from '../../utils/add-decimal';
import { FLAGS } from '../../data/flags';

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
    <div className={styles.cardContainer}>
        <div className={styles.imageWrapper}>
            <img
                className={styles.productImage}
                alt={cardData.description}
                src={cardData.productImageLink}
            />
            <div className={styles.wish}>
                <Wish />
            </div>
            <div className={styles.flags}>
                {Object.keys(FLAGS).map((flag) => (
                    cardData[flag] &&
                    <FlagCampaign
                        key={flag}
                        flagText={FLAGS[flag].flagText}
                        background={FLAGS[flag].background}
                        fontColor={FLAGS[flag].color}
                    />
                ))}
            </div>
        </div>
        {renderTextContent(cardData, brandName)}
    </div>
);

export default CardCampaign;
