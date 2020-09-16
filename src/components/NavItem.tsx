import React from 'react';
import styles from './NavItem.module.scss';

type TIcon = {
  icon: {
    icon: React.ReactNode,
    name: string
  }
};

const NavItem = ({ icon }: TIcon) => (
  <button type="button" className={styles.navItem}>
    {icon.icon}
    <span>{icon.name}</span>
  </button>
);

export default NavItem;
