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

const moreOptions: any = [['Help',
  'Newsletter'],
['Dutsch',
  'English'],
];

type MyProps = {
  close: () => void,
  changeGender: (gender: string) => void;
  handleCategorie: (option: string) => void;
  backToOptions: () => void;
  shouldShrink: boolean;
  openCategorie: boolean,
  activeGender: string;
  categorieName: string,
  genders: any;
  options: string[],
};

class Menu extends React.Component<MyProps, {}> {
  renderTitle = () => {
    const {
      changeGender,
      activeGender,
      genders,
      openCategorie,
      categorieName,
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
            {categorieName}
          </h2>
        </div>
      </div>
    );
  };

  renderList = () => {
    const {
      categorieName, openCategorie, handleCategorie, options, shouldShrink,
    } = this.props;
    const categorie: any = CATEGORIES[categorieName];
    const titles: string[] = Object.keys(categorie);

    return (
      <div className={`${styles.menuList}`}>
        <div className={styles.options}>
          <MenuList hasCaret list={options} handleCategorie={handleCategorie} />
          {moreOptions.map((optionsList: any) => (
            <MenuList list={optionsList} handleCategorie={handleCategorie} />
          ))}
        </div>
        <div className={`
          ${styles.categories} 
          ${openCategorie ? styles.show : styles.hide}
          ${openCategorie && shouldShrink ? styles.shrink : ''}
          `}
        >
          {openCategorie && (
          <div className={styles.categoriesWrapper}>
            {titles.map((title: string) => (
              <MenuListCategorie title={title} list={categorie[title]} />
            ))}

          </div>
          )}

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
        <div className={styles.menuFooter}>
          <ZalandoIcon />
        </div>
      </div>
    );
  }
}

export default Menu;
