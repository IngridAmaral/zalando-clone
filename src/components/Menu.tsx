import React from 'react';
import MenuList from './menuList';
import MenuListCategory from './MenuListCategory';
import Close from '../assets/svgs/close';
import Goback from '../assets/svgs/goback';
import ZalandoIcon from '../assets/svgs/zalando-icon';
import styles from './Menu.module.scss';

const CATEGORIES: any = {
  'Get The Look': {
    'Get The Look': [
      'All Outfits',
      'Classic Outfits',
      'Casual Outfits',
      'Trendy Outfits',
      'Party Outfits',
      'Sporty Outfits'],
    VIP: [
      'Toni Garrn',
      'Rebecca Mir'],
    TRENDS: [
      'Slip Dresses',
      'Organza Blouses',
      'Statement Bags',
      'Pattern Styles',
      'Trendy Cardigans',
      'Unisex',
      'Trendy Pearls',
      'Minimalism',
      'Bucket Hats',
      'Trendy Shirts',
      'Pastel Palette'],
    HIGHLIGHTS: [
      'Textile Masks',
      '#supportthestores'],
  },
};

const moreOptions: any = [
  ['Help', 'Newsletter'],
  ['Dutsch', 'English'],
];

type MyProps = {
  close: () => void,
  changeGender: (gender: string) => void;
  activeGender: string;
  genders: string[];
  options: string[];
  isMenuOpen: boolean;
};

type MyState = {
  shrinkMenuHeader: boolean;
  categoryName: string;
  openCategory: boolean;
};

class Menu extends React.Component<MyProps, MyState> {
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
    const { options } = this.props;
    if (option === options[0]) {
      this.setState({
        categoryName: option,
        openCategory: true,
      });
    }
  };

  handleScroll = (e: any) => {
    const scrolled: number = e.target.scrollTop;
    const { shrinkMenuHeader } = this.state;

    if (scrolled > 50 && !shrinkMenuHeader) {
      this.setState({
        shrinkMenuHeader: true,
      });
    } else if (scrolled < 50 && shrinkMenuHeader) {
      this.setState({
        shrinkMenuHeader: false,
      });
    }
  };

  renderTitle = () => {
    const {
      changeGender,
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
                onClick={() => changeGender(gender)}
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

  renderList = () => {
    const { options } = this.props;
    const { openCategory, shrinkMenuHeader } = this.state;
    const category: any = CATEGORIES[options[0]];
    const titles = Object.keys(category);

    return (
      <div className={`${styles.menuList}`}>
        <div
          id="categories-link"
          className={styles.options}
        >
          <MenuList
            hasCaret
            list={options}
            handleCategory={this.handleSelectCategory}
          />
          {moreOptions.map((optionsList: any) => (
            <MenuList
              key={`${optionsList[0]}moreopt`}
              list={optionsList}
              handleCategory={this.handleSelectCategory}
            />
          ))}
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
              {titles.map((title: string) => (
                <MenuListCategory key={title} title={title} list={category[title]} />
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
    const { close } = this.props;
    const { shrinkMenuHeader } = this.state;
    return (
      <div className={styles.menuContainer} onScroll={this.handleScroll}>
        <div className={`${styles.menuHeader} ${shrinkMenuHeader ? styles.shrink : ''}`}>
          {this.renderTitle()}
          <button
            className={styles.closeMenu}
            type="button"
            onClick={close}
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
