import React from 'react';
import styles from './SubCategories.module.scss';
import { filterEmptyCategrories } from '../../../utils/filter-empty-categories';
import { TSubSubCategory } from '../../header/Header';

type SubCategoriesProps = {
  subCategories: TSubSubCategory[];
  subCategoryName: string;
};

const SubCategories: React.FC<SubCategoriesProps> = ({
  subCategoryName,
  subCategories,
}) => (
  <div className={styles.subCategories}>
    <span className={styles.name}>{subCategoryName}</span>
    <ul>
      {filterEmptyCategrories(subCategories).map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  </div>
);

export default SubCategories;
