import React from 'react';
import logo from '../constants/imgs/logo';
import Language from '../assets/svgs/language';
import Account from '../assets/svgs/account';
import Wish from '../assets/svgs/wish';
import Basket from '../assets/svgs/basket';
import MenuIcon from '../assets/svgs/menu';
import Menu from './Menu';
import './Header.scss';

type MyState = {
  openMenu: boolean;
  shrinkMenuHeader: boolean;
  activeGender: string;
};

class Header extends React.Component<{}, MyState> {
  state: MyState = {
    openMenu: false,
    shrinkMenuHeader: false,
    activeGender: 'WOMEN',
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
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

  toggleMenu = () => {
    this.setState((prevState) => ({ openMenu: !prevState.openMenu, shrinkMenuHeader: false }));
  };

  handleGenderChange = (gender: string) => this.setState({ activeGender: gender });

  render() {
    const {
      openMenu, activeGender, shrinkMenuHeader,
    } = this.state;
    return (
      <div className="header-container">
        <div className="top-row">
          <img src={logo} alt="Zalando logo" />
          <div className="nav-items">
            <Language />
            <Account />
            <Wish />
            <Basket />
          </div>
        </div>
        <div className="bottom-row">
          <button type="button" className="open-menu" onClick={this.toggleMenu}>
            <MenuIcon />
          </button>
          <div className="search">
            Search
          </div>
        </div>
        <div className={`lateral-menu-open-${openMenu}`} onScroll={this.handleScroll}>
          <Menu
            close={this.toggleMenu}
            changeGender={this.handleGenderChange}
            activeGender={activeGender}
            shouldShrink={shrinkMenuHeader}
          />
        </div>
      </div>
    );
  }
}

export default Header;
