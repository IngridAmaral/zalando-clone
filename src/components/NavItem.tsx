import React from 'react';
import styles from './NavItem.module.scss';

type MyProps = {
  icon: any;
};

const NavItem = ({ icon }: MyProps) => (
  <button type="button" className={styles.navItem}>
    {icon.icon}
    <span>{icon.name}</span>
  </button>
);

export default NavItem;
