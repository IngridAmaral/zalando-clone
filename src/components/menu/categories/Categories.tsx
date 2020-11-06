import React from 'react';
import styles from './Categories.module.scss';
import Caret from '../../../assets/svgs/Caret';
import { TCategory } from '../../header/Header';

type CategoriesProps = {
  hasCaret?: boolean;
  selectCategory?: (categoryName: string) => void;
  categories: TCategory[];
};

const Categories: React.FC<CategoriesProps> = ({
  hasCaret,
  selectCategory,
  categories,
}) => (
  <div className={styles.categoryLink}>
    <ul>
      {categories.map((category) => (
        <li
          key={category.name}
          onClick={selectCategory && (() => selectCategory(category.name))}
        >
          <span className={styles.item}>{category.name}</span>
          {hasCaret && <Caret />}
        </li>
      ))}
    </ul>
  </div>
);

Categories.defaultProps = { hasCaret: false };

export default Categories;
