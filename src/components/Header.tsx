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
import { filterDash } from '../utils/filterDash';
import styles from './Header.module.scss';

export type TIcon = { component: React.ReactNode, name: string };

export const ICONS: Array<TIcon> = [
  { component: <Language />, name: 'English' },
  { component: <Account />, name: 'Login' },
  { component: <Wish />, name: 'Wish list' },
  { component: <Basket />, name: 'Your bag' },
];

type TGender = 'women' | 'men' | 'kids';

export const GENDERS: TGender[] = ['women', 'men', 'kids'];

type TName = { name: string };
type TChildren = { name: string, children: Array<TName> };

export type TCategories = {
  children: Array<{ name: string, children: Array<TChildren> }>,
  name: string,
};

type HeaderState = {
  openMenu: boolean;
  activeGender: string;
  activeGenderCategoriesData: Array<TCategories>;
  hoverCategoryData: { name: string, data: TCategories };
  shouldShowDropdown: boolean;
};

class Header extends React.Component<{}, HeaderState> {
  state: HeaderState = {
    openMenu: false,
    activeGender: GENDERS[0],
    activeGenderCategoriesData: [],
    hoverCategoryData: { name: '', data: { name: '', children: [] } },
    shouldShowDropdown: false,
  };

  componentDidMount() {
    const { activeGender } = this.state;
    const activeData = navCategories[activeGender].children;

    this.setState({ activeGenderCategoriesData: activeData });
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
      activeGenderCategoriesData: activeData,
    });
  };

  handleActive = (category: TCategories, name: string) => {
    const { hoverCategoryData } = this.state;

    if (!hoverCategoryData || hoverCategoryData.name !== name) {
      this.setState({ hoverCategoryData: { name: name.replace(/[^A-Z0-9]+/ig, ''), data: category } });
    }
  };

  showDropdown = () => {
    this.setState({ shouldShowDropdown: true });
  };

  hideDropdown = () => {
    this.setState({ shouldShowDropdown: false });
  };

  renderMenuSection = () => {
    const {
      openMenu,
      activeGender,
      activeGenderCategoriesData,
    } = this.state;

    return (
      <div
        id="wrapper-menu"
        className={`${styles.lateralMenuWrapper} ${openMenu ? styles.fadeIn : ''}`}
        role="button"
        tabIndex={0}
        onClick={this.handleClickOutside}
      >
        <div
          className={`${openMenu
            ? styles.lateralMenuOpen
            : styles.lateralMenu
            }`}
        >
          <Menu
            onClose={this.handleOpenMenu}
            onChangeGender={this.handleGenderChange}
            activeGender={activeGender}
            genders={GENDERS}
            categories={activeGenderCategoriesData}
            isMenuOpen={openMenu}
          />
        </div>
      </div>
    )
  }

  renderDropDown = () => {
    const {
      hoverCategoryData,
      shouldShowDropdown,
    } = this.state;
    return (<div
      onMouseEnter={this.showDropdown}
      onMouseLeave={this.hideDropdown}
      className={`${styles.dropdown} ${shouldShowDropdown ? styles.show : ''}`}
    >
      <div id={`${hoverCategoryData.name}`} className={styles.categoriesLists}>
        {hoverCategoryData.data.children.map((subCategory) => (
          <div className={styles.category} key={`sub${subCategory.name}`}>
            <span>{subCategory.name}</span>
            <ul>
              {filterDash(subCategory.children).map((sub: TName, idx: number) => sub.name !== '--' && <li key={`${`${idx}0`}${sub.name}`}>{sub.name}</li>)}
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
    </div>)
  }


  render() {
    const {
      activeGender,
      activeGenderCategoriesData,
    } = this.state;

    if (!activeGenderCategoriesData.length) {
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
            {activeGenderCategoriesData.map((categories) => (
              <div
                key={categories.name}
                className={styles.option}
                onFocus={() => this.handleActive(categories, categories.name)}
                onMouseOver={() => this.handleActive(categories, categories.name)}
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
          {this.renderMenuSection()}
          {this.renderDropDown()}
        </div>
      </div >
    );
  }
}

export default Header;
