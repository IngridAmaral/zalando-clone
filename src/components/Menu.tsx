import React from 'react';
import Caret from '../assets/svgs/caret';
import Close from '../assets/svgs/close';
import Goback from '../assets/svgs/goback';
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

type MyProps = {
  close: () => void,
  changeGender: (gender: string) => void;
  handleCategorie: (option: string) => void;
  backToOptions: () => void;
  shouldShrink: boolean;
  openCategorie: boolean,
  activeGender: string;
  categorieList: string,
  genders: string[];
  options: string[],
};

class Menu extends React.Component<MyProps, {}> {
  renderTitle = () => {
    const {
      changeGender,
      activeGender,
      genders,
      openCategorie,
      categorieList,
      backToOptions,
    } = this.props;

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
        <button type="button" className={styles.goBack} onClick={backToOptions}>
          <Goback />
        </button>
        <div className={styles.title}>
          <h2>
            {categorieList}
          </h2>
        </div>
      </div>
    );
  };

  renderList = () => {
    const {
      categorieList, openCategorie, handleCategorie, options,
    } = this.props;
    const categorie: any = CATEGORIES[categorieList];
    const titles: string[] = Object.keys(categorie);

    return (
      <div className={styles.menuList}>
        <ul>
          {options.map((option) => (
            <li key={option} onClick={() => handleCategorie(option)}>
              <span className={styles.item}>
                {option}
                <Caret />
              </span>
            </li>
          ))}
        </ul>
        <div className={`${styles.categories} ${openCategorie ? styles.show : styles.hide}`}>
          {titles.map((title: string) => (
            <div key={title} className={styles.categorie}>
              <span className={styles.title}>
                {title}
              </span>
              <ul>
                {categorie[title].map((item: string) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  render() {
    const {
      close, shouldShrink,
    } = this.props;
    return (
      <div className={styles.menuContainer}>
        <div className={`${styles.menuHeader} ${shouldShrink ? styles.shrink : ''}`}>
          {this.renderTitle()}
          <button type="button" className={styles.closeMenu}>
            <button type="button" onClick={close}>
              <Close />
            </button>
          </button>
        </div>
        {this.renderList()}
      </div>
    );
  }
}

export default Menu;
