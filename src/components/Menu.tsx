import React from 'react';
import Caret from '../assets/svgs/caret';
import Close from '../assets/svgs/close';
import './Menu.scss';

const GENDERS = ['WOMEN', 'MEN', 'KIDS'];

const OPTIONS = [
  'GET THE LOOK',
  'NEW',
  'CLOTHING',
  'SHOES',
  'SPORT',
  'ACCESSORIES',
  'BEAUTY',
  'DESIGNER',
  'BRANDS',
  'SALE %',
  'HELP',
  'NEWSLETTER',
  'DEUTSCH',
  'ENGLISH',
];

type MyProps = {
  close: () => void,
  changeGender: (gender: string) => void;
  shouldShrink: boolean;
  activeGender: string;
};

const Header = ({
  close, changeGender, activeGender, shouldShrink,
}: MyProps) => (
  <div className="menu-container">
    <div className={`menu-header ${shouldShrink ? 'shrink' : 'expand'}`}>
      <div className="gender">
        {GENDERS.map((gender) => <button type="button" id={gender} onClick={() => changeGender(gender)} className={activeGender === gender ? 'active' : ''}>{gender}</button>)}
      </div>
      <button type="button" className="close-menu" onClick={close}>
        <Close />
        {' '}
      </button>
    </div>
    <div className="menu-options">
      <ul>
        {OPTIONS.map((option) => (
          <li>
            <span>
              {option}
              <Caret />
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Header;
