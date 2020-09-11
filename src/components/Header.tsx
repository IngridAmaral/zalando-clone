import React from 'react';
import navCategories from './navCategories';
import HeaderTopRow from './HeaderTopRow';
import Language from '../assets/svgs/language';
import Account from '../assets/svgs/account';
import Wish from '../assets/svgs/wish';
import Basket from '../assets/svgs/basket';
import MenuIcon from '../assets/svgs/menu';
import SearchIcon from '../assets/svgs/search';
import Menu from './Menu';
import styles from './Header.module.scss';

const ICONS = [
  { icon: <Language />, name: 'English' },
  { icon: <Account />, name: 'Login' },
  { icon: <Wish />, name: 'Wish list' },
  { icon: <Basket />, name: 'Your bag' }];

type TGender = 'women' | 'men' | 'kids';

const GENDERS: TGender[] = ['women', 'men', 'kids'];

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
];

type MyState = {
  openMenu: boolean;
  activeGender: string;
  activeGenderData: Array<any>;
};

class Header extends React.Component<{}, MyState> {
  state = {
    openMenu: false,
    activeGender: GENDERS[0],
    activeGenderData: [],
  };

  componentDidMount() {
    const { activeGender } = this.state;
    const activeData = navCategories[activeGender].children;

    this.setState({ activeGenderData: activeData });
  }

  handleOpenMenu = () => {
    this.setState(
      (prevState) => ({
        openMenu: !prevState.openMenu,
      }),
    );
  };

  handleClickOutside = (e: any) => {
    const { openMenu } = this.state;
    if (openMenu && e.target.id === 'wrapper-menu') {
      e.stopPropagation();
      this.setState({ openMenu: false });
    }
  };

  handleGenderChange = (gender: string) => {
    const activeData = navCategories[gender].children;

    this.setState({
      activeGender: gender,
      activeGenderData: activeData,
    });
  };

  render() {
    const { openMenu, activeGender, activeGenderData } = this.state;

    if (!activeGenderData.length) {
      return (<div>loading</div>);
    }

    return (
      <div className={styles.headerContainer}>
        <HeaderTopRow
          changeGender={this.handleGenderChange}
          activeGender={activeGender}
          icons={ICONS}
          genders={GENDERS}
        />
        <div className={styles.bottomRow}>
          <button
            type="button"
            className={styles.openMenu}
            onClick={this.handleOpenMenu}
          >
            <MenuIcon />
            <span>Menu</span>
          </button>
          <div className={styles.menuOptions}>
            {activeGenderData.map((categories: any) => (
              <div key={categories.name} className={styles.option}>
                <button type="button" key={categories.name}>
                  {categories.name}
                </button>
                <div className={styles.dropdown}>
                  {categories.children.map((subCategory: any) => (
                    <div className={styles.categories} key={`1${categories.name}${subCategory.name}`}>
                      <span>{subCategory.name}</span>
                      <ul>
                        {subCategory.children.map((sub, idx) => sub.name !== '--' && <li key={`${`${idx}0`}${categories.name}${sub.name}`}>{sub.name}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.search}>
            <SearchIcon />
            Search
          </div>
        </div>
        <div
          id="wrapper-menu"
          className={`${styles.lateralMenu} ${openMenu ? styles.fadeIn : ''}`}
          role="button"
          tabIndex={0}
          onClick={this.handleClickOutside}
        >
          <div
            className={`${
              openMenu
                ? styles.lateralMenuOpen
                : styles.lateralMenuClose
            }`}
          >
            <Menu
              close={this.handleOpenMenu}
              changeGender={this.handleGenderChange}
              activeGender={activeGender}
              genders={GENDERS}
              options={OPTIONS}
              isMenuOpen={openMenu}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
