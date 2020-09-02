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

type TGender = 'WOMEN' | 'MEN' | 'KIDS';

const GENDERS: TGender[] = ['WOMEN', 'MEN', 'KIDS'];

const GET_THE_LOOK: string = 'Get The Look';

const OPTIONS: string[] = [
  'Get The Look',
  'New',
  'Clothing',
  'Shoes',
  'Sport',
  'Accessories',
  'Beauty',
  'Designer',
  'Brands',
  'Sale %',
  'Help',
  'Newsletter',
  'Dutsch',
  'English',
];

type MyProps = {
  close: () => void,
  changeGender: (gender: string) => void;
  shouldShrink: boolean;
  activeGender: string;
};

type MyState = {
  categorieList: string,
  openCategorie: boolean,
};

class Header extends React.Component<MyProps, MyState> {
  state = {
    categorieList: GET_THE_LOOK,
    openCategorie: false,
  };

  handleCategorie = (option: string) => {
    this.setState({
      categorieList: option,
      openCategorie: true,
    });
  };

  backToOptions = () => {
    this.setState({
      categorieList: GET_THE_LOOK,
      openCategorie: false,
    });
  };

  renderTitle = () => {
    const {
      changeGender, activeGender,
    } = this.props;
    const { openCategorie, categorieList } = this.state;

    if (!openCategorie) {
      return (
        <div className={styles.gender}>
          {GENDERS.map((gender) => <button type="button" key={gender} id={gender} onClick={() => changeGender(gender)} className={activeGender === gender ? styles.active : ''}>{gender}</button>)}
        </div>
      );
    }

    return (
      <div className={styles.headerCategorie}>
        <button type="button" className={styles.goBack} onClick={() => this.backToOptions()}>
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
    const { categorieList, openCategorie } = this.state;
    const categorie: any = CATEGORIES[categorieList];
    const titles: string[] = Object.keys(categorie);

    return (
      <div className={styles.menuList}>
        <ul>
          {OPTIONS.map((option) => (
            <li key={option} onClick={() => this.handleCategorie(option)}>
              <span className={styles.item}>
                {option}
                <Caret />
              </span>
            </li>
          ))}
        </ul>
        <div className={`${styles.categories} ${openCategorie ? styles.show : styles.hide}`}>
          {titles.map((title: string) => (
            <div className={styles.categorie}>
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
        <div className={`${styles.menuHeader} ${shouldShrink ? styles.shrink : styles.expand}`}>
          {this.renderTitle()}
          <button type="button" className={styles.closeMenu} onClick={close}>
            <Close />
          </button>
        </div>
        {this.renderList()}
      </div>
    );
  }
}

export default Header;
