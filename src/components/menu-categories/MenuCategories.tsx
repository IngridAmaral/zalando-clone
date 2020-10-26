import React from 'react';
import styles from './MenuCategories.module.scss';
import Caret from '../../assets/svgs/Caret';
import { TCategory } from '../header/Header';

type MenuCategoriesProps = {
  hasCaret?: boolean;
  handleCategory?: (option: TCategory) => void;
  categories: TCategory[];
};

const MenuCategories: React.FC<MenuCategoriesProps> = ({
  hasCaret,
  handleCategory,
  categories,
}) => (
  <div className={styles.categoryLink}>
    <ul>
      {categories.map((category) => (
        <li
          key={category.name}
          onClick={handleCategory && (() => handleCategory(category))}
        >
          <span className={styles.item}>{category.name}</span>
          {hasCaret && <Caret />}
        </li>
      ))}
    </ul>
  </div>
);

MenuCategories.defaultProps = { hasCaret: false };

export default MenuCategories;
