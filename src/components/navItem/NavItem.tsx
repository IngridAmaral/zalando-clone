import React from 'react';
import styles from './NavItem.module.scss';
import { TIcon } from '../header/Header';

type NavItemProps = { icon: TIcon };

const NavItem = ({ icon }: NavItemProps) => (
  <button type="button" className={styles.navItem}>
    {icon.component}
    <span>{icon.name}</span>
  </button>
);

export default NavItem;
