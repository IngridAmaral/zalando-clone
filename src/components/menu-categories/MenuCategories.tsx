import React from 'react';
import styles from './MenuCategories.module.scss';
import Caret from '../../assets/svgs/Caret';
import { TCategories } from '../header/Header';


type MenuCategoriesProps = {
  hasCaret?: boolean;
  handleCategory?: (option: TCategories) => void;
  categories: TCategories[];
};

const MenuCategories = ({
  hasCaret, handleCategory, categories,
}: MenuCategoriesProps) => (
    <div className={styles.categoryLink}>
      <ul>
        {categories.map((category) => (
          <li key={category.name} onClick={handleCategory && (() => handleCategory(category))}>
            <span className={styles.item}>
              {category.name}
            </span>
            {hasCaret && (<Caret />)}
          </li>
        ))}
      </ul>
    </div>
  );

MenuCategories.defaultProps = { hasCaret: false };

export default MenuCategories;
