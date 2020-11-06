import React from 'react';
import styles from './NavItem.module.scss';
import { TIcon } from '../../Header';

type NavItemProps = { icon: TIcon };

const NavItem: React.FC<NavItemProps> = ({ icon }): JSX.Element => (
  <button type="button" className={styles.navItem}>
    {icon.component}
    <span>{icon.name}</span>
  </button>
);

export default NavItem;
