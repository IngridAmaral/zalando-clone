import React from 'react';
import styles from './NavItem.module.scss';
import { TIcon } from './Header';

type NavItemProps = { icon: TIcon };

const NavItem = ({ icon }: NavItemProps )  => (
  <button type="button" className={styles.navItem}>
    {icon.icon}
    <span>{icon.name}</span>
  </button>
);

export default NavItem;
