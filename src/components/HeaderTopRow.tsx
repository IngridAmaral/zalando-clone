import React from 'react';
import NavItem from './NavItem';
import logo from '../constants/imgs/logo';
import styles from './HeaderTopRow.module.scss';

type MyProps ={
  changeGender: (gender: string) => void;
  activeGender: string;
  genders: string[];
  icons: any;
};

const HeaderTopRow = ({
  changeGender, activeGender, icons, genders,
}: MyProps) => (
  <div className={styles.topRow}>
    <div className={styles.genderTop}>
      {genders.map((gender, idx) => (
        <div key={`${gender}top`} className={styles.gender}>
          <span
            role="button"
            tabIndex={idx}
            onClick={() => changeGender(gender)}
            className={activeGender === gender ? styles.active : ''}
          >
            {gender}
          </span>
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
