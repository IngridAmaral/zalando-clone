import React from 'react';
import HeaderTopRow from './HeaderTopRow';
import Language from '../assets/svgs/language';
import Account from '../assets/svgs/account';
import Wish from '../assets/svgs/wish';
import Basket from '../assets/svgs/basket';
import MenuIcon from '../assets/svgs/menu';
import Menu from './Menu';
import styles from './Header.module.scss';

const ICONS = [
  { icon: <Language />, name: 'English' },
  { icon: <Account />, name: 'Login' },
  { icon: <Wish />, name: 'Wish list' },
  { icon: <Basket />, name: 'Your bag' }];

type TGender = 'women' | 'men' | 'kids';

const GENDERS: TGender[] = ['women', 'men', 'kids'];

type MyState = {
  openMenu: boolean;
  activeGender: string;
};

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

class Header extends React.Component<{}, MyState> {
  state = {
    openMenu: true,
    activeGender: GENDERS[0],
  };

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

  handleGenderChange = (gender: string) => this.setState({ activeGender: gender });

  render() {
    const { openMenu, activeGender } = this.state;
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
            {OPTIONS.map((option) => <span key={option}>{option}</span>)}
          </div>
          <div className={styles.search}>
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
