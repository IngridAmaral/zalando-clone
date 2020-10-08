import React from 'react';
import styles from './MenuListCategory.module.scss';
import Caret from '../../assets/svgs/Caret';


type MyProps = {
  hasCaret?: boolean;
  handleCategory: (option: string) => void;
  categoriesList: Array<{ name: string }>;
};

const MenuListCategory = ({
  hasCaret, handleCategory, categoriesList,
}: MyProps) => (
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
