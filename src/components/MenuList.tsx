import React from 'react';
import styles from './MenuList.module.scss';
import Caret from '../assets/svgs/caret';

const defaultProps = {
  hasCaret: false,
};

type MyProps = {
  list: any;
  hasCaret?: boolean;
  handleCategory: (option: string) => void;
} & typeof defaultProps;

const MenuList = ({ list, hasCaret, handleCategory }: MyProps) => (
  <div className={styles.categoryLink}>
    <ul>
      {list.map((option: string) => (
        <li key={option} onClick={() => handleCategory(option)}>
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
