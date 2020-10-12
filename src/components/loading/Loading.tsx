import React from 'react';
import styles from './Loading.module.scss';
import ReactLoading from 'react-loading';


const Loading = () => (
  <div className={styles.loading}>
    <h2 className={styles.text}>
      Loading
    </h2>
    <ReactLoading type={'spin'} height={'2%'} width={'2%'}/>
  </div>
);

export default Loading;
