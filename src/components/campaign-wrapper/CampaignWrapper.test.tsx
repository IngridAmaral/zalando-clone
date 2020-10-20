import React from 'react';
import { shallow } from 'enzyme';
import CampaignWrapper from './CampaignWrapper';
import BannerCampaign from '../banner-campaign/BannerCampaign';
import BottomCampaignWrapper from '../bottom-campaign-wrapper/BottomCampaignWrapper';
import { campaignData } from '../../data/campaign-data';

const defaultProps = {
  brand: campaignData[0],
}

const {
  brandName,
  background,
  fontColor,
  subTitle,
  linkText,
  mainImg,
  cards,
  cardsBackground
} = defaultProps.brand;

describe('<CampaignWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<CampaignWrapper {...defaultProps} />);
  });

  it('renders banner componenet with correct props', () => {
    const wrapper = shallow(<CampaignWrapper {...defaultProps} />);
  
    expect(wrapper.find(BannerCampaign).prop('brandName')).toEqual(brandName);
    expect(wrapper.find(BannerCampaign).prop('background')).toEqual(background);
    expect(wrapper.find(BannerCampaign).prop('fontColor')).toEqual(fontColor);
    expect(wrapper.find(BannerCampaign).prop('subTitle')).toEqual(subTitle);
    expect(wrapper.find(BannerCampaign).prop('linkText')).toEqual(linkText);
    expect(wrapper.find(BannerCampaign).prop('mainImg')).toEqual(mainImg);
  });  

  it('renders bottom campaign componenet with correct props', () => {
    const wrapper = shallow(<CampaignWrapper {...defaultProps} />);
  
    expect(wrapper.find(BottomCampaignWrapper).prop('cards')).toEqual(cards);
    expect(wrapper.find(BottomCampaignWrapper).prop('brandName')).toEqual(brandName);
    expect(wrapper.find(BottomCampaignWrapper).prop('cardsBackground')).toEqual(cardsBackground);
    expect(wrapper.find(BottomCampaignWrapper).prop('fontColor')).toEqual(fontColor);
  });  
});
