import React from 'react';
import Categories from './categories/Categories';
import SubCategories from './sub-categories/SubCategories';
import Close from '../../assets/svgs/Close';
import Goback from '../../assets/svgs/Goback';
import ZalandoIcon from '../../assets/svgs/ZalandoIcon';
import styles from './Menu.module.scss';
import { TCategory } from '../header/Header';

export const SCROLL_THRESHOLD = 50;

export const moreOptions: Array<TCategory[]> = [
  [
    {
      name: 'Help',
      tracking_code: 'help',
      children: [],
      url_key: '',
      type: '',
    },
    {
      name: 'Newsletter',
      tracking_code: 'newsletter',
      children: [],
      url_key: '',
      type: '',
    },
  ],
  [
    {
      name: 'Dutsch',
      tracking_code: 'dutsh',
      children: [],
      url_key: '',
      type: '',
    },
    {
      name: 'English',
      tracking_code: 'english',
      children: [],
      url_key: '',
      type: '',
    },
  ],
];

type MenuProps = {
  onClose: () => void;
  onChangeGender: (gender: string) => void;
  activeGender: string;
  genders: string[];
  categories: TCategory[];
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

  handleMenuHeaderScroll = (e: React.UIEvent<HTMLElement>): void => {
    const scrolled = e.currentTarget.scrollTop;
    const { shrinkMenuHeader } = this.state;

    if (scrolled > SCROLL_THRESHOLD && !shrinkMenuHeader) {
      this.shrinkMenuHeader();
    } else if (scrolled < SCROLL_THRESHOLD && shrinkMenuHeader) {
      this.expandMenuHeader();
    }
  };

  shrinkMenuHeader = (): void => {
    this.setState({
      shrinkMenuHeader: true,
    });
  };

  expandMenuHeader = (): void => {
    this.setState({
      shrinkMenuHeader: false,
    });
  };

  renderLateralMenuCategoryHeader = (): JSX.Element => {
    const { onChangeGender, activeGender, genders } = this.props;

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
  };

  renderLateralMenuSubCategoryHeader = (): JSX.Element => {
    const { categoryName } = this.state;

    return (
      <div className={styles.headerCategory}>
        <button
          type="button"
          className={styles.goBack}
          onClick={this.backToOptions}
        >
          <Goback />
        </button>
        <div className={styles.title}>
          <h2>{categoryName}</h2>
        </div>
      </div>
    );
  };

  backToOptions = (): void => {
    this.setState({
      categoryName: '',
    });
  };

  renderList = (): JSX.Element => {
    const { categories } = this.props;
    const { categoryName, shrinkMenuHeader } = this.state;

    const currentCategory = categories.find(
      (category) => category.name === categoryName
    );

    return (
      <div className={`${styles.menuList}`}>
        <div id="categories-link" className={styles.options}>
          <Categories
            hasCaret
            categories={categories}
            selectCategory={this.selectCategory}
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
          ${categoryName ? styles.show : styles.hide}
            ${categoryName && shrinkMenuHeader ? styles.shrink : ''}
              `}
        >
          {categoryName && (
            <div className={styles.categoriesWrapper}>
              {currentCategory &&
                currentCategory.children.map((subCategory) => (
                  <SubCategories
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

  selectCategory = (categoryName: string): void => {
    const { categories } = this.props;
    const isNewCategory = categories.some((category) => category.name === name);

    if (isNewCategory) this.setState({ categoryName });
  };

  renderMoreOptions = (): JSX.Element[] =>
    moreOptions.map((optionsList) => (
      <Categories
        key={`${optionsList[0].name}moreopt`}
        categories={optionsList}
      />
    ));

  render(): JSX.Element {
    const { onClose } = this.props;
    const { shrinkMenuHeader, categoryName } = this.state;

    return (
      <div
        className={styles.menuContainer}
        onScroll={this.handleMenuHeaderScroll}
      >
        <div
          className={`${styles.menuHeader} ${
            shrinkMenuHeader ? styles.shrink : ''
          }`}
        >
          {!categoryName
            ? this.renderLateralMenuCategoryHeader()
            : this.renderLateralMenuSubCategoryHeader()}
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
