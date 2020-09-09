import React from 'react';
import MenuList from './menuList';
import MenuListCategorie from './MenuListCategorie';
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
  categorieName: string;
  openCategorie: boolean;
};

class Menu extends React.Component<MyProps, MyState> {
  state = {
    shrinkMenuHeader: false,
    categorieName: '',
    openCategorie: false,
  };

  backToOptions = () => {
    this.setState({
      categorieName: '',
      openCategorie: false,
    });
  };

  handleSelectCategory = (option: string) => {
    const { options } = this.props;
    if (option === options[0]) {
      this.setState({
        categorieName: option,
        openCategorie: true,
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
      openCategorie,
      categorieName,
    } = this.state;

    if (!openCategorie) {
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
      <div className={styles.headerCategorie}>
        <button type="button" className={styles.goBack} onClick={this.backToOptions}>
          <Goback />
        </button>
        <div className={styles.title}>
          <h2>
            {categorieName}
          </h2>
        </div>
      </div>
    );
  };

  renderList = () => {
    const { options } = this.props;
    const { openCategorie, shrinkMenuHeader } = this.state;
    const categorie: any = CATEGORIES[options[0]];
    const titles = Object.keys(categorie);

    return (
      <div className={`${styles.menuList}`}>
        <div
          id="categories-link"
          className={styles.options}
        >
          <MenuList
            hasCaret
            list={options}
            handleCategorie={this.handleSelectCategory}
          />
          {moreOptions.map((optionsList: any) => (
            <MenuList
              key={`${optionsList[0]}moreopt`}
              list={optionsList}
              handleCategorie={this.handleSelectCategory}
            />
          ))}
        </div>
        <div
          id="categories"
          className={`
            ${styles.categories} 
            ${openCategorie ? styles.show : styles.hide}
            ${openCategorie && shrinkMenuHeader ? styles.shrink : ''}
          `}
        >
          {openCategorie && (
            <div className={styles.categoriesWrapper}>
              {titles.map((title: string) => (
                <MenuListCategorie key={title} title={title} list={categorie[title]} />
              ))}
            </div>
          )}
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
        <div className={styles.menuFooter}>
          <ZalandoIcon />
        </div>
      </div>
    );
  }
}

export default Menu;
