import React from 'react';
import styles from './MenuListSubCategory.module.scss';

type MenuListSubCategoryProps = {
  subCategoryList: Array<{name: string}>;
  subCategoryTitle: string;
};

const MenuListSubCategory = ({ subCategoryTitle, subCategoryList }: MenuListSubCategoryProps) => (
  <div className={styles.category}>
    <span className={styles.title}>
      {subCategoryTitle}
    </span>
    <ul>
      {subCategoryList.map((item: any) => item.name !== '--' && <li key={item.name}>{item.name}</li>)}
    </ul>
  </div>
);

export default MenuListSubCategory;
