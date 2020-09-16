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

type TIcon = { icon: React.ReactNode, name: string };
type TIcons = Array<TIcon>;

const ICONS: TIcons = [
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

type CategoryChildren = {name: string};

type Category = {
  children: Array<CategoryChildren>,
  name:string,
};

type Categories = {name: string};

type MyState = {
  openMenu: boolean;
  activeGender: string;
  activeGenderData: Array<Categories>;
  hoverData: Category;
  shouldShowDropdown: boolean;
};

class Header extends React.Component<{}, MyState> {
  state = {
    openMenu: false,
    activeGender: GENDERS[0],
    activeGenderData: [],
    hoverData: { name: '', children: [] },
    shouldShowDropdown: false,
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

  handleClickOutside = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { id } = e.target as HTMLDivElement;
    const { openMenu } = this.state;
    if (openMenu && id === 'wrapper-menu') {
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

  handleHover = (categories: Category) => {
    const { hoverData } = this.state;

    if (!hoverData || hoverData.name !== categories.name) {
      this.setState({ hoverData: categories });
    }
  };

  showDropdown = () => {
    this.setState({ shouldShowDropdown: true });
  };

  hideDropdown = () => {
    this.setState({ shouldShowDropdown: false });
  };

  render() {
    const {
      openMenu,
      activeGender,
      activeGenderData,
      hoverData,
      shouldShowDropdown,
    } = this.state;

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
          <div
            id="nav-items"
            className={styles.menuOptions}
            onMouseEnter={this.showDropdown}
            onMouseLeave={this.hideDropdown}
          >
            {activeGenderData.map((categories: Category) => (
              <div
                key={categories.name}
                className={styles.option}
                onFocus={() => this.handleHover(categories)}
                onMouseOver={() => this.handleHover(categories)}
              >
                <button type="button">
                  {categories.name}
                </button>
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
              categories={activeGenderData}
              isMenuOpen={openMenu}
            />
          </div>
        </div>
        <div
          onMouseEnter={this.showDropdown}
          onMouseLeave={this.hideDropdown}
          className={`${styles.dropdown} ${shouldShowDropdown ? styles.show : ''}`}
        >
          <div id="cetegories" className={styles.categoriesLists}>
            {hoverData.children.map((subCategory: Category) => (
              <div id="cetegory" className={styles.category} key={`1${subCategory.name}`}>
                <span>{subCategory.name}</span>
                <ul>
                  {subCategory.children.map((sub, idx) => sub.name !== '--' && <li key={`${`${idx}0`}${sub.name}`}>{sub.name}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <img
            alt="banner"
            style={{
              backgroundColor: '#0C7AA4',
              color: '#FFFFFF',
            }}
            src="https://mosaic02.ztat.net/nvg/z-header-fragment/images/production/en-DE/women/beca8fef-ec5a-4538-b226-b360a12c626c/image/1599222782390/large2x.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Header;
