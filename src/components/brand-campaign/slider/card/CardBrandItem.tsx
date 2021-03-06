import React from 'react';
import Wish from '../../../../assets/svgs/Wish';
import Flag from './flag/Flag';
import { TCard } from '../../../../redux/types/campaignBrands';
import { addDecimal } from '../../../../utils/add-decimal';
import { FLAGS } from '../../../../server/data/flags';
import styles from './CardBrandItem.module.scss';

type CardBrandItemProps = {
  card: TCard;
  brandName: string;
};

type TRenderPrice = {
  price: number;
  hasDifferentPrices?: boolean;
};

const renderTextContent = (card: TCard, brandName: string) => (
  <div className={styles.productInfos}>
    <div>
      <h1 className={styles.title}>{brandName}</h1>
      <h3 className={styles.description}>{card.description}</h3>
    </div>
    {renderPrice(card)}
    {card.extraInformation && renderExtraInformation(card.extraInformation)}
  </div>
);

const renderPrice = ({ price, hasDifferentPrices = false }: TRenderPrice) => (
  <span className={styles.priceTag}>
    {hasDifferentPrices
      ? `From ${addDecimal(price)} €`
      : `${addDecimal(price)} €`}
  </span>
);

const renderExtraInformation = (information: string) => (
  <span className={styles.extraInformation}>{information}</span>
);

const CardBrandItem: React.FC<CardBrandItemProps> = ({ card, brandName }) => (
  <div className={styles.cardContainer}>
    <div className={styles.imageWrapper}>
      <img
        className={styles.productImage}
        alt={card.description}
        src={card.productImageLink}
      />
      <div className={styles.wish}>
        <Wish />
      </div>
      <div className={styles.flags}>
        {Object.keys(FLAGS).map((flagKey) => {
          const { flagText, background, color } = FLAGS[flagKey];

          return (
            card[flagKey] && (
              <Flag
                key={flagKey}
                flagText={flagText}
                background={background}
                fontColor={color}
              />
            )
          );
        })}
      </div>
    </div>
    {renderTextContent(card, brandName)}
  </div>
);

export default CardBrandItem;
