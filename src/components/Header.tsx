import React from 'react';
import logo from '../constants/imgs/logo';
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

type MyState = {
  openMenu: boolean;
  shrinkMenuHeader: boolean;
  activeGender: string;
  categorieList: string;
  openCategorie: boolean;
};

class Header extends React.Component<{}, MyState> {
  state: MyState = {
    openMenu: false,
    shrinkMenuHeader: false,
    activeGender: GENDERS[0],
    categorieList: OPTIONS[0],
    openCategorie: false,
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

  handleCategorie = (option: string) => {
    this.setState({
      categorieList: option,
      openCategorie: true,
    });
  };

  backToOptions = () => {
    this.setState({
      categorieList: OPTIONS[0],
      openCategorie: false,
    });
  };

  handleMenuOpen = () => {
    this.setState(
      (prevState) => ({
        openMenu: !prevState.openMenu,
        shrinkMenuHeader: false,
        openCategorie: false,
      }),
    );
  };

  handleClickOutside = (e: any) => {
    const { openMenu } = this.state;
    e.stopPropagation();

    if (openMenu && e.target.id === 'wrapper-menu') {
      this.setState({ openMenu: false, shrinkMenuHeader: false });
    }
  };

  handleGenderChange = (gender: string) => this.setState({ activeGender: gender });

  render() {
    const {
      openMenu, activeGender, shrinkMenuHeader, openCategorie, categorieList,
    } = this.state;
    return (
      <div className={styles.headerContainer}>
        <div className={styles.topRow}>
          <div className={styles.genderTop}>
            {GENDERS.map((gender, idx) => (
              <span
                role="button"
                tabIndex={idx}
                onClick={() => this.handleGenderChange(gender)}
                key={`${gender}top`}
                className={activeGender === gender ? styles.active : ''}
              >
                {gender}
              </span>
            ))}
          </div>
          <img className={styles.logo} src={logo} alt="Zalando logo" />
          <div className={styles.navItems}>
            {ICONS.map((icon) => (
              <button type="button" className={styles.navItem}>
                {icon.icon}
                <span>{icon.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className={styles.bottomRow}>
          <button
            type="button"
            className={styles.openMenu}
            onClick={this.handleMenuOpen}
          >
            <MenuIcon />
            <span>Menu</span>
          </button>
          <div className={styles.search}>
            Search
          </div>
        </div>
        <div
          id="wrapper-menu"
          role="button"
          tabIndex={0}
          className={`
            ${openMenu
            ? styles.lateralMenuOpen
            : styles.lateralMenu
              }`}
          onScroll={this.handleScroll}
          onClick={this.handleClickOutside}
        >
          <Menu
            close={this.handleMenuOpen}
            changeGender={this.handleGenderChange}
            activeGender={activeGender}
            shouldShrink={shrinkMenuHeader}
            genders={GENDERS}
            openCategorie={openCategorie}
            categorieList={categorieList}
            options={OPTIONS}
            handleCategorie={this.handleCategorie}
            backToOptions={this.backToOptions}
          />
        </div>
      </div>
    );
  }
}

export default Header;
