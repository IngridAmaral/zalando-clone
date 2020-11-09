import React from 'react';
import styles from './Dropdown.module.scss';

type DropdownProps = {
  // subCategories: TSubSubCategory[];
  // subCategoryName: string;
};

const Dropdown: React.FC<DropdownProps> = () => (
  <div className={styles.dropdown}></div>
);

export default Dropdown;
