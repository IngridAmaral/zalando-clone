import React from 'react';
import styles from './MenuListCategory.module.scss';

type MyProps = {
  list: any;
  title: string;
};

const MenuList = ({ list, title }: MyProps) => (
  <div className={styles.category}>
    <span className={styles.title}>
      {title}
    </span>
    <ul>
      {list.map((item: string) => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

export default MenuList;
