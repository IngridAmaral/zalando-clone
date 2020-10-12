import React from 'react';
import { shallow } from 'enzyme';
import FollowBrandCampaign from './FollowBrandCampaign';
import styles from './FollowBrandCampaign.module.scss';
import { campaignData } from '../../data/campaign-data';

const defaultProps = {
  brandName: campaignData[0].brandName,
  fontColor: campaignData[0].fontColor
}

describe('<FollowBrandCampaign />', () => {
  it('renders without crashing', () => {
    shallow(<FollowBrandCampaign {...defaultProps}/>);
  });

  it('renders the correct text', () => {
    const wrapper = shallow(<FollowBrandCampaign {...defaultProps}/>);

    expect(wrapper.find(`.${styles.followBrandContainer}`).childAt(1).text()).toBe(defaultProps.brandName);
  });
});
