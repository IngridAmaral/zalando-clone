import React from 'react';
import styles from './MenuList.module.scss';
import Caret from '../assets/svgs/caret';

const defaultProps = {
  hasCaret: false,
};

type MyProps = {
  list: any;
  hasCaret?: boolean;
  handleCategorie: (option: string) => void;
} & typeof defaultProps;

const MenuList = ({ list, hasCaret, handleCategorie }: MyProps) => (
  <div className={styles.categorieLink}>
    <ul>
      {list.map((option: string) => (
        <li key={option} onClick={() => handleCategorie(option)}>
          <span className={styles.item}>
            {option}
          </span>
          {hasCaret && (<Caret />)}
        </li>
      ))}
    </ul>
  </div>
);

MenuList.defaultProps = defaultProps;

export default MenuList;
