import React from 'react';
import styles from './Flag.module.scss';

type FlagProps = {
  flagText: string;
  background: string;
  fontColor: string;
};

const Flag: React.FC<FlagProps> = ({ flagText, background, fontColor }) => (
  <span
    className={styles.flag}
    style={{ background: `${background}`, color: `${fontColor}` }}
  >
    {flagText}
  </span>
);

export default Flag;
