import React from 'react';
import BottomCampaignWrapper from '../components/bottomCampaignWrapper/BottomCampaignWrapper';
import Header from '../components/header/Header';
import './Home.scss';


const Home = () => (
  <div>
    <Header />
    <div>
      <BottomCampaignWrapper />
    </div>
  </div>
);

export default Home;
