import React from 'react';
import NavItem from './nav-item/NavItem';
import logo from '../../../constants/Imgs/logo';
import styles from './HeaderTopRow.module.scss';
import { TIcon } from '../Header';

type TopRowProps = {
  changeGender: (gender: string) => void;
  activeGender: string;
  genders: string[];
  icons: TIcon[];
};

const TopRow: React.FC<TopRowProps> = ({
  changeGender,
  activeGender,
  icons,
  genders,
}): JSX.Element => (
  <div className={styles.topRow}>
    <div className={styles.genderTop}>
      {genders.map((gender) => (
        <div key={`${gender}top`} className={styles.gender}>
          <button
            onClick={() => changeGender(gender)}
            className={`${styles.genderSelect} ${
              activeGender === gender ? styles.active : ''
            }`}
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

export default TopRow;
