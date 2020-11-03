import React from 'react';
import { shallow } from 'enzyme';
import FollowBrandCampaign from './FollowBrandCampaign';
import Follow from '../../assets/svgs/Close';
import styles from './FollowBrandCampaign.module.scss';
import { campaignBrandsData } from '../../server/data/campaign-brands-data';

const defaultProps = {
  brandName: campaignBrandsData[0].brandName,
  fontColor: campaignBrandsData[0].fontColor,
};

const style = {
  color: `${defaultProps.fontColor}`,
  boxShadow: `inset 0 0 0 1px ${defaultProps.fontColor}`,
};

describe('<FollowBrandCampaign />', () => {
  it('renders without crashing', () => {
    shallow(<FollowBrandCampaign {...defaultProps} />);
  });

  it('renders the correct text', () => {
    const wrapper = shallow(<FollowBrandCampaign {...defaultProps} />);

    expect(
      wrapper.find(`.${styles.followBrandContainer}`).childAt(1).text()
    ).toBe(defaultProps.brandName);
  });

  it('passes the correct prop collor to Follow', () => {
    const wrapper = shallow(<FollowBrandCampaign {...defaultProps} />);

    expect(wrapper.find(Follow).prop('color')).toBe(defaultProps.fontColor);
  });

  it('should render the button with the correct color style', () => {
    const wrapper = shallow(<FollowBrandCampaign {...defaultProps} />);

    expect(wrapper.find(`.${styles.followBrand}`).prop('style')).toEqual(style);
  });
});
