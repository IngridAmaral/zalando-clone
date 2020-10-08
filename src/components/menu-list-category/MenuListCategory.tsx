import React from 'react';
import styles from './MenuListCategory.module.scss';
import Caret from '../../assets/svgs/Caret';
import { TSubSubCategory } from '../header/Header';


type MenuListCategoryProps = {
  hasCaret?: boolean;
  handleCategory: (option: string) => void;
  categoriesList: TSubSubCategory[];
};

const MenuListCategory = ({
  hasCaret, handleCategory, categoriesList,
}: MenuListCategoryProps) => (
    <div className={styles.categoryLink}>
      <ul>
        {categoriesList.map((option) => (
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

MenuListCategory.defaultProps = { hasCaret: false };

export default MenuListCategory;
