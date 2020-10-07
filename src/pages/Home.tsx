import React from 'react';
import Header from '../components/header/Header';
import CampaignWrapper from '../components/campaignWrapper/campaignWrapper';
import { campaignData } from '../data/campaign-data';
import './Home.scss';


const Home = () => (
  <div>
    <Header />
    <div>
      {campaignData.map((brand) => <CampaignWrapper brand={brand} />)}


    </div>
  </div>
);

export default Home;
