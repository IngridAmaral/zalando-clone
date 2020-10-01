import React from 'react';
import CardsCampaignSlider from '../components/cardsCampaignSlider/CardsCampaignSlider';
import Header from '../components/header/Header';
import './Home.scss';

const Home = () => (
  <div>
    <Header />
    <div>
      <CardsCampaignSlider />
    </div>
  </div>
);

export default Home;
