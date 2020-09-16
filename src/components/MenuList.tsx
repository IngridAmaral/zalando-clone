import React from 'react';
import styles from './MenuList.module.scss';
import Caret from '../assets/svgs/caret';

const defaultProps = {
  hasCaret: false,
  categoriesList: [],
};

type MyProps = {
  hasCaret?: boolean;
  handleCategory: (option: string) => void;
  categoriesList?: any;
} & typeof defaultProps;

const MenuList = ({
  hasCaret, handleCategory, categoriesList,
}: MyProps) => (
  <div className={styles.categoryLink}>
    <ul>
      {categoriesList.map((option: any) => (
        <li key={option.name} onClick={() => handleCategory(option.name)}>
          <span className={styles.item}>
            {option.name}
          </span>
          {hasCaret && (<Caret />)}
        </li>
      ))}
    </ul>
  </div>
);

MenuList.defaultProps = defaultProps;

export default MenuList;
