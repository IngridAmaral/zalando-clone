import React from 'react';
import Header from '../components/header/Header';
import CampaignWrapper from '../components/campaign-wrapper/CampaignWrapper';
import { campaignData } from '../data/campaign-data';
import './Home.scss';

const Home = (): JSX.Element => (
  <div>
    <Header />
    <div>
      {campaignData.map((brand) => (
        <CampaignWrapper key={brand.brandName} brand={brand} />
      ))}
    </div>
  </div>
);

export default Home;
