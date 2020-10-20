import React from 'react';
import MenuCategories from '../menu-categories/MenuCategories';
import MenuSubCategories from '../menu-sub-categories/MenuSubCategories';
import Close from '../../assets/svgs/Close';
import Goback from '../../assets/svgs/GoBack';
import ZalandoIcon from '../../assets/svgs/ZalandoIcon';
import styles from './Menu.module.scss';
import { TCategories, TSubSubCategory } from '../header/Header';

export const SCROLL_THRESHOLD = 50;

export const moreOptions: Array<TCategories[]> = [
  [{ name: 'Help' , tracking_code: 'help', children: []}, { name: 'Newsletter', tracking_code: 'newsletter', children: []}],
  [{ name: 'Dutsch', tracking_code: 'dutsh', children: [] }, { name: 'English', tracking_code: 'english', children: []}],
];

type MenuProps = {
  onClose: () => void,
  onChangeGender: (gender: string) => void;
  activeGender: string;
  genders: string[];
  categories: TCategories[];
};

type MenuState = {
  shrinkMenuHeader: boolean;
  categoryName: string;
};

class Menu extends React.Component<MenuProps, MenuState> {
  state = {
    shrinkMenuHeader: false,
    categoryName: '',
  };

  backToOptions = () => {
    this.setState({
      categoryName: '',
    });
  };

  handleSelectCategory = (option: TSubSubCategory) => {
    const { categories } = this.props;
    const { name } = option;
    if (categories.some((category) => category.name === name)) {
      this.setState({
        categoryName: name,
      });
    }
  };

  handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    const scrolled = e.currentTarget.scrollTop;
    const { shrinkMenuHeader } = this.state;

    if (scrolled > SCROLL_THRESHOLD && !shrinkMenuHeader) {
      this.setState({
        shrinkMenuHeader: true,
      });
    } else if (scrolled < SCROLL_THRESHOLD && shrinkMenuHeader) {
      this.setState({
        shrinkMenuHeader: false,
      });
    }
  };

  renderLateralMenuHeaderCategory = () => {
    const {
      onChangeGender,
      activeGender,
      genders,
    } = this.props;

    return (
      <div className={styles.gender}>
        <div className={styles.activeGender}>{activeGender}</div>
        <div className={styles.selectGender}>
          {genders.map((gender) => (
            <span
              role="button"
              tabIndex={0}
              key={gender}
              id={gender}
              onClick={() => onChangeGender(gender)}
              className={activeGender === gender ? styles.active : ''}
            >
              {gender}
            </span>
          ))}
        </div>
      </div>
    );
  }

  renderLateralMenuHeaderSubCategory = () => {
    const {
      categoryName,
    } = this.state;

    return (
      <div className={styles.headerCategory}>
        <button type="button" className={styles.goBack} onClick={this.backToOptions}>
          <Goback />
        </button>
        <div className={styles.title}>
          <h2>
            {categoryName}
          </h2>
        </div>
      </div>
    );
  }

  renderMoreOptions = () => {
    return moreOptions.map((optionsList) => (
      <MenuCategories
        key={`${optionsList[0].name}moreopt`}
        categories={optionsList}
      />
    ))
  }

  renderList = () => {
    const { categories } = this.props;
    const { categoryName, shrinkMenuHeader } = this.state;

    const currentCategory = categories.find(category => category.name === categoryName);

    return (
      <div className={`${styles.menuList}`}>
        <div
          id="categories-link"
          className={styles.options}
        >
          <MenuCategories
            hasCaret
            categories={categories}
            handleCategory={this.handleSelectCategory}
          />
          {this.renderMoreOptions()}
          <div className={styles.menuFooter}>
            <ZalandoIcon />
          </div>
        </div>
        <div
          id="categories"
          className={`
            ${styles.categories} 
            ${categoryName
       ? styles.show : styles.hide}
            ${categoryName
       && shrinkMenuHeader ? styles.shrink : ''}
          `}
        >
          {categoryName
   && (
            <div className={styles.categoriesWrapper}>
              {currentCategory && currentCategory.children.map((subCategory) => (
                <MenuSubCategories
                  key={subCategory.name}
                  subCategoryName={subCategory.name}
                  subCategories={subCategory.children}
                />
              ))}
            </div>
          )}
          <div className={styles.menuFooter}>
            <ZalandoIcon />
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { onClose } = this.props;
    const { shrinkMenuHeader, categoryName } = this.state;

    return (
      <div className={styles.menuContainer} onScroll={this.handleScroll}>
        <div className={`${styles.menuHeader} ${shrinkMenuHeader ? styles.shrink : ''}`}>
          {!categoryName ? this.renderLateralMenuHeaderCategory() : this.renderLateralMenuHeaderSubCategory() }
          <button
            className={styles.onCloseMenu}
            type="button"
            onClick={onClose}
          >
            <Close />
          </button>
        </div>
        {this.renderList()}
      </div>
    );
  }
}

export default Menu;
