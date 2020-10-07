import React from 'react';
import { shallow } from 'enzyme';
import BottomCampaignWrapper from './BottomCampaignWrapper';
import CardsCampaignSlider from '../cardsCampaignSlider/CardsCampaignSlider';
import FollowBrandCampaign from '../followBrandCampaign/FollowBrandCampaign';
import styles from './BottomCampaignWrapper.module.scss';
import { campaignData } from '../../data/campaign-data';

const cards = campaignData[0].cards;
const brandName = campaignData[0].brandName;
const fontColor = campaignData[0].fontColor;
const background = campaignData[0].background;
const style = {background: `${background}`, color: `${fontColor}`}

describe('<BottomCampaignWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<BottomCampaignWrapper />);
  });

  it('renders the correct style', () => {
    const wrapper = shallow(<BottomCampaignWrapper />);

    expect(wrapper.find(`.${styles.bottomCampaignContainer}`).prop('style')).toEqual(style);
  });

  it('renders the card campaign slider', () => {
    const wrapper = shallow(<BottomCampaignWrapper />);

    expect(wrapper.find(CardsCampaignSlider).exists()).toBe(true);
  });

  it('renders the correct props in campaign slider', () => {
    const wrapper = shallow(<BottomCampaignWrapper />);

    expect(wrapper.find(CardsCampaignSlider).prop('cards')).toEqual(cards);
    expect(wrapper.find(CardsCampaignSlider).prop('brandName')).toEqual(brandName);
  });

  it('renders the follow brand', () => {
    const wrapper = shallow(<BottomCampaignWrapper />);

    expect(wrapper.find(FollowBrandCampaign).exists()).toBe(true);
  });

  it('renders the correct props in follow brand', () => {
    const wrapper = shallow(<BottomCampaignWrapper />);

    expect(wrapper.find(FollowBrandCampaign).prop('fontColor')).toEqual(fontColor);
    expect(wrapper.find(FollowBrandCampaign).prop('brandName')).toEqual(brandName);
  });
});
