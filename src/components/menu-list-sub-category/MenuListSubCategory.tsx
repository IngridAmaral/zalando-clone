import React from 'react';
import styles from './MenuListSubCategory.module.scss';
import { filterEmptyCategrories } from '../../utils/filter-empty-categories';

export type TSubCategory = { name: string };

type MenuListSubCategoryProps = {
  subCategoryList: Array<TSubCategory>;
  subCategoryTitle: string;
};

const MenuListSubCategory = ({ subCategoryTitle, subCategoryList }: MenuListSubCategoryProps) => (
  <div className={styles.category}>
    <span className={styles.title}>
      {subCategoryTitle}
    </span>
    <ul>
      {filterEmptyCategrories(subCategoryList).map((item: TSubCategory) => <li key={item.name}>{item.name}</li>)}
    </ul>
  </div>
);

export default MenuListSubCategory;
