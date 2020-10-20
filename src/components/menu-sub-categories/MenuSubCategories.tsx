import React from 'react';
import styles from './MenuSubCategories.module.scss';
import { filterEmptyCategrories } from '../../utils/filter-empty-categories';
import { TSubSubCategory } from '../header/Header';

type MenuSubCategoriesProps = {
  subCategories: TSubSubCategory[];
  subCategoryName: string;
};

const MenuSubCategories = ({ subCategoryName, subCategories }: MenuSubCategoriesProps) => (
  <div className={styles.subCategories}>
    <span className={styles.name}>
      {subCategoryName}
    </span>
    <ul>
      {filterEmptyCategrories(subCategories).map((item) => <li key={item.name}>{item.name}</li>)}
    </ul>
  </div>
);

export default MenuSubCategories;
