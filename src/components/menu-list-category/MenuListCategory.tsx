import React from 'react';
import styles from './MenuListCategory.module.scss';
import Caret from '../../assets/svgs/Caret';
import { TCategories } from '../header/Header';


type MenuListCategoryProps = {
  hasCaret?: boolean;
  handleCategory: (option: TCategories) => void;
  categoriesList: TCategories[];
};

const MenuListCategory = ({
  hasCaret, handleCategory, categoriesList,
}: MenuListCategoryProps) => (
    <div className={styles.categoryLink}>
      <ul>
        {categoriesList.map((option) => (
          <li key={option.name} onClick={() => handleCategory(option)}>
            <span className={styles.item}>
              {option.name}
            </span>
            {hasCaret && (<Caret />)}
          </li>
        ))}
      </ul>
    </div>
  );

MenuListCategory.defaultProps = { hasCaret: false };

export default MenuListCategory;
