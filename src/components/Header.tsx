import React from 'react';
import logo from '../constants/imgs/logo';
import Language from '../assets/svgs/language';
import Account from '../assets/svgs/account';
import Wish from '../assets/svgs/wish';
import Basket from '../assets/svgs/basket';
import Menu from '../assets/svgs/menu';
import './Header.scss';

const Header = () => (
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
      <Menu />
      <div className="search">
        Search
      </div>
    </div>
  </div>
);

export default Header;
