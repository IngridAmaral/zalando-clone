import React from 'react';
import BannerCampaign from '../components/bannerCampaign/BannerCampaign';
import BottomCampaignWrapper from '../components/bottomCampaignWrapper/BottomCampaignWrapper';
import Header from '../components/header/Header';
import './Home.scss';


const Home = () => (
  <div>
    <Header />
    <div>
      <BannerCampaign />
      <BottomCampaignWrapper />
    </div>
  </div>
);

export default Home;
