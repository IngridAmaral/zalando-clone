import React from 'react';
import { shallow } from 'enzyme';
import CampaignWrapper from './CampaignWrapper';
// import styles from './CampaignWrapper.module.scss';
import { campaignData } from '../../data/campaign-data';

const defaultProps = {
  brand: campaignData[0],
}

describe('<CampaignWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<CampaignWrapper {...defaultProps} />);
  });
});
