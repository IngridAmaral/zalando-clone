import React from 'react';
import MenuListCategory from '../menuListCategory/MenuListCategory';
import MenuListSubCategory from '../menuListSubCategory/MenuListSubCategory';
import Close from '../../assets/svgs/close';
import Goback from '../../assets/svgs/goback';
import ZalandoIcon from '../../assets/svgs/zalando-icon';
import styles from './Menu.module.scss';

export const SCROLL_THRESHOLD = 50;

export const moreOptions: Array<Array<{ name: string }>> = [
  [{ name: 'Help' }, { name: 'Newsletter' }],
  [{ name: 'Dutsch' }, { name: 'English' }],
];

export type TCategories = {
  children: Array<{ name: string, children: Array<{ name: string }> }>,
  name: string,
};

type MenuProps = {
  onClose: () => void,
  onChangeGender: (gender: string) => void;
  activeGender: string;
  genders: string[];
  isMenuOpen: boolean;
  categories: Array<TCategories>;
};

type MenuState = {
  shrinkMenuHeader: boolean;
  categoryName: string;
  openCategory: boolean;
};

class Menu extends React.Component<MenuProps, MenuState> {
  state = {
    shrinkMenuHeader: false,
    categoryName: '',
    openCategory: false,
  };

  backToOptions = () => {
    this.setState({
      categoryName: '',
      openCategory: false,
    });
  };

  handleSelectCategory = (option: string) => {
    const { categories } = this.props;
    if (categories.some((category) => category.name === option)) {
      this.setState({
        categoryName: option,
        openCategory: true,
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

  renderTitle = () => {
    const {
      onChangeGender,
      activeGender,
      genders,
    } = this.props;

    const {
      openCategory,
      categoryName,
    } = this.state;

    if (!openCategory) {
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
  };

  renderMoreOptions = () => {
    return moreOptions.map((optionsList) => (
      <MenuListCategory
        key={`${optionsList[0].name}moreopt`}
        categoriesList={optionsList}
        handleCategory={() => { }}
      />
    ))
  }

  renderList = () => {
    const { categories } = this.props;
    const { openCategory, shrinkMenuHeader, categoryName } = this.state;

    const currentCategory = categories.find(category => category.name === categoryName);

    return (
      <div className={`${styles.menuList}`}>
        <div
          id="categories-link"
          className={styles.options}
        >
          <MenuListCategory
            hasCaret
            categoriesList={categories}
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
            ${openCategory ? styles.show : styles.hide}
            ${openCategory && shrinkMenuHeader ? styles.shrink : ''}
          `}
        >
          {openCategory && (
            <div className={styles.categoriesWrapper}>
              {currentCategory && currentCategory.children.map((subCategory) => (
                <MenuListSubCategory
                  key={subCategory.name}
                  subCategoryTitle={subCategory.name}
                  subCategoryList={subCategory.children}
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
    const { shrinkMenuHeader } = this.state;

    return (
      <div className={styles.menuContainer} onScroll={this.handleScroll}>
        <div className={`${styles.menuHeader} ${shrinkMenuHeader ? styles.shrink : ''}`}>
          {this.renderTitle()}
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