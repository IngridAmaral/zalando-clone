import React from 'react';
import styles from './FlagCampaign.module.scss';

type FlagCampaignProps = {
    flagText: string,
    background: string,
    fontColor: string
}

const FlagCampaign = ({ flagText, background, fontColor }: FlagCampaignProps) => (
    <span className={styles.flag} style={{ background: `${background}`, color: `${fontColor}`}}>
        {flagText}
    </span>
);

export default FlagCampaign;
