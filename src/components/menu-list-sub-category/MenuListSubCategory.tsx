import React from 'react';
import styles from './MenuListSubCategory.module.scss';
import { filterEmptyCategrories } from '../../utils/filter-empty-categories';
import { TSubSubCategory } from '../header/Header';

type MenuListSubCategoryProps = {
  subCategoryList: TSubSubCategory[];
  subCategoryTitle: string;
};

const MenuListSubCategory = ({ subCategoryTitle, subCategoryList }: MenuListSubCategoryProps) => (
  <div className={styles.category}>
    <span className={styles.title}>
      {subCategoryTitle}
    </span>
    <ul>
      {filterEmptyCategrories(subCategoryList).map((item) => <li key={item.name}>{item.name}</li>)}
    </ul>
  </div>
);

export default MenuListSubCategory;
