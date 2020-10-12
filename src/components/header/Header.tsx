import React from 'react';
import navCategories from '../../data/nav-categories';
import HeaderTopRow from '../header-top-row/HeaderTopRow';
import Language from '../../assets/svgs/Language';
import Account from '../../assets/svgs/Account';
import Wish from '../../assets/svgs/Wish';
import Basket from '../../assets/svgs/Basket';
import MenuIcon from '../../assets/svgs/Menu';
import SearchIcon from '../../assets/svgs/Search';
import Menu from '../menu/Menu';
import Loading from '../loading/Loading';
import { filterEmptyCategrories } from '../../utils/filter-empty-categories';
import styles from './Header.module.scss';

export type TIcon = { component: React.ReactNode, name: string };

export const ICONS: TIcon[] = [
  { component: <Language />, name: 'English' },
  { component: <Account />, name: 'Login' },
  { component: <Wish />, name: 'Wish list' },
  { component: <Basket />, name: 'Your bag' },
];

type TGender = 'women' | 'men' | 'kids';

export const GENDERS: TGender[] = ['women', 'men', 'kids'];

export type TSubSubCategory = {
  name: string,
  url_key?: string,
  type?: string,
  red?: boolean,
  tracking_code: string,
  isTitle?: boolean,
};

export type TSubCategory = {
  name: string,
  url_key?: string
  type?: string,
  red?: boolean,
  tracking_code: string,
  isTitle?: boolean,
  children: TSubSubCategory[],
};

export type TCategories = {
  name: string,
  url_key?: string,
  type?: string,
  tracking_code: string,
  image_link?: unknown,
  children: TSubCategory[],
};

type HeaderState = {
  isMenuOpen: boolean;
  activeGender: string;
  activeGenderCategoriesData: TCategories[];
  activeCategoryData: { name: string, data: TCategories };
  shouldShowDropdown: boolean;
};

class Header extends React.Component<{}, HeaderState> {
  state: HeaderState = {
    isMenuOpen: false,
    activeGender: GENDERS[0],
    activeGenderCategoriesData: [],
    activeCategoryData: { name: '', data: { name: '', children: [], tracking_code: '', image_link: {}, url_key: '', type: '' } },
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
        isMenuOpen: !prevState.isMenuOpen,
      }),
    );
  };

  handleClickOutside = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { id } = e.target as HTMLDivElement;
    const { isMenuOpen } = this.state;
    if (isMenuOpen && id === 'lateral-menu') {
      e.stopPropagation();
      this.setState({ isMenuOpen: false });
    }
  };

  handleGenderChange = (gender: string) => {
    const activeData = navCategories[gender].children;

    this.setState({
      activeGender: gender,
      activeGenderCategoriesData: activeData,
    });
  };

  updateActiveCategoryData  = (category: TCategories) => {
    const { activeCategoryData } = this.state;
    const { name } = category;

    if (!activeCategoryData || activeCategoryData.name !== name) {
      this.setState({ activeCategoryData: { name: name.replace(/[^A-Z0-9]+/ig, ''), data: category } });
    }
  };

  showDropdown = () => {
    this.setState({ shouldShowDropdown: true });
  };

  hideDropdown = () => {
    this.setState({ shouldShowDropdown: false });
  };

  renderLateralMenu = () => {
    const {
      isMenuOpen,
      activeGender,
      activeGenderCategoriesData,
    } = this.state;

    return (
      <div
        id="lateral-menu"
        className={`${styles.lateralMenuWrapper} ${isMenuOpen ? styles.fadeIn : ''}`}
        role="button"
        tabIndex={0}
        onClick={this.handleClickOutside}
      >
        <div
          className={`${styles.lateralMenu} ${isMenuOpen
            && styles.lateralMenuOpen
            }`}
        >
          <Menu
            onClose={this.handleOpenMenu}
            onChangeGender={this.handleGenderChange}
            activeGender={activeGender}
            genders={GENDERS}
            categories={activeGenderCategoriesData}
            isMenuOpen={isMenuOpen}
          />
        </div>
      </div>
    )
  }

  renderDropDown = () => {
    const {
      activeCategoryData,
      shouldShowDropdown,
    } = this.state;

    return (<div
      onMouseEnter={this.showDropdown}
      onMouseLeave={this.hideDropdown}
      className={`${styles.dropdown} ${shouldShowDropdown ? styles.show : ''}`}
    >
      <div id={`${activeCategoryData.name}`} className={styles.categoriesLists}>
        {activeCategoryData.data.children.map((subCategory) => (
          <div className={styles.category} key={subCategory.tracking_code}>
            <span>{subCategory.name}</span>
            <ul>
              {filterEmptyCategrories(subCategory.children).map(
                (subSubCategory) => <li key={subSubCategory.tracking_code}>{subSubCategory.name}</li>
              )}
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
      return (<Loading />);
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
            {activeGenderCategoriesData.map((category) => (
              <div
                key={category.tracking_code}
                className={styles.option}
                onFocus={() => this.updateActiveCategoryData (category)}
                onMouseOver={() => this.updateActiveCategoryData (category)}
              >
                <button type="button">
                  {category.name}
                </button>
              </div>
            ))}
          </div>
          <div className={styles.search}>
            <SearchIcon />
            Search
          </div>
          {this.renderLateralMenu()}
          {this.renderDropDown()}
        </div>
      </div >
    );
  }
}

export default Header;
