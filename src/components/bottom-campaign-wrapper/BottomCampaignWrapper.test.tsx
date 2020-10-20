import React from 'react';
import { shallow } from 'enzyme';
import BottomCampaignWrapper from './BottomCampaignWrapper';
import CardsCampaignSlider from '../cards-campaign-slider/CardsCampaignSlider';
import FollowBrandCampaign from '../follow-brand-campaign/FollowBrandCampaign';
import styles from './BottomCampaignWrapper.module.scss';
import { campaignData } from '../../data/campaign-data';

const { cards, brandName, fontColor, cardsBackground } = campaignData[0];

const defaultProps = {
  cards: cards,
  brandName: brandName,
  fontColor: fontColor,
  cardsBackground: cardsBackground
}

describe('<BottomCampaignWrapper />', () => {
  it('renders without crashing', () => {
    shallow(<BottomCampaignWrapper {...defaultProps} />);
  });

  it('renders the correct style', () => {
    const wrapper = shallow(<BottomCampaignWrapper {...defaultProps} />);
    const style = { background: `${defaultProps.cardsBackground}`, color: `${defaultProps.fontColor}` }

    expect(wrapper.find(`.${styles.bottomCampaignContainer}`).prop('style')).toEqual(style);
  });

  it('renders the card campaign slider', () => {
    const wrapper = shallow(<BottomCampaignWrapper {...defaultProps} />);

    expect(wrapper.find(CardsCampaignSlider).exists()).toBe(true);
  });

  it('renders the correct props in campaign slider', () => {
    const wrapper = shallow(<BottomCampaignWrapper {...defaultProps} />);

    expect(wrapper.find(CardsCampaignSlider).prop('cards')).toEqual(cards);
    expect(wrapper.find(CardsCampaignSlider).prop('brandName')).toEqual(brandName);
  });

  it('renders the follow brand', () => {
    const wrapper = shallow(<BottomCampaignWrapper {...defaultProps} />);

    expect(wrapper.find(FollowBrandCampaign).exists()).toBe(true);
  });

  it('renders the correct props in follow brand', () => {
    const wrapper = shallow(<BottomCampaignWrapper {...defaultProps} />);

    expect(wrapper.find(FollowBrandCampaign).prop('fontColor')).toEqual(fontColor);
    expect(wrapper.find(FollowBrandCampaign).prop('brandName')).toEqual(brandName);
  });
});
