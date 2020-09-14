import React from 'react';
import Header from '../components/Header';
import banner1 from '../constants/imgs/imgs';

import './Home.scss';

const Home = () => (
  <div>
    <Header />
    <img src={banner1} alt="banner1" />
  </div>
);

export default Home;
