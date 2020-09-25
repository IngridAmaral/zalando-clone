import React from 'react';
import NavItem from './NavItem';
import logo from '../constants/imgs/logo';
import styles from './HeaderTopRow.module.scss';
import { TIcon }  from './Header';

type MyProps = {
  changeGender: (gender: string) => void;
  activeGender: string;
  genders: string[];
  icons: Array<TIcon>;
};

const HeaderTopRow = ({
  changeGender, activeGender, icons, genders,
}: MyProps) => (
  <div className={styles.topRow}>
    <div className={styles.genderTop}>
      {genders.map((gender) => (
        <div key={`${gender}top`} className={styles.gender}>
          <button
            onClick={() => changeGender(gender)}
            className={`genderSelect ${activeGender === gender ? styles.active : ''}`}
          >
            {gender}
          </button>
        </div>
      ))}
    </div>
    <img className={styles.logo} src={logo} alt="Zalando logo" />
    <div className={styles.navItems}>
      {icons.map((icon) => (
        <NavItem key={icon.name} icon={icon} />
      ))}
    </div>
  </div>
);

export default HeaderTopRow;
