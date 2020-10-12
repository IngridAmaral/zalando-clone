import React from 'react';
import { shallow } from 'enzyme';
import CardCampaign from './CardCampaign';
import FlagCampaign from '../flag-campaign/FlagCampaign';
import styles from './CardCampaign.module.scss';
import { campaignData } from '../../data/campaign-data';
import { addDecimal } from '../../utils/add-decimal';
import { FLAGS } from '../../data/flags';

const defaultProps = {
  cardData: campaignData[0].cards[0],
  brandName: campaignData[0].brandName
}

describe('<CardCampaign />', () => {
  it('renders without crashing', () => {
    shallow(<CardCampaign {...defaultProps} />);
  });

  it('renders the correct image', () => {
    const wrapper = shallow(<CardCampaign {...defaultProps} />);

    expect(wrapper.find('img').prop('src')).toEqual(defaultProps.cardData.productImageLink);
  });

  it('renders the flags correctly', () => {
    const wrapper = shallow(<CardCampaign {...defaultProps} />);

    Object.keys(FLAGS).forEach((flag, idx) => {
      if (defaultProps.cardData[flag]) { 
        expect(wrapper.find(FlagCampaign).at(idx).prop('flagText')).toEqual(FLAGS[flag].flagText);
        expect(wrapper.find(FlagCampaign).at(idx).prop('background')).toEqual(FLAGS[flag].background);
        expect(wrapper.find(FlagCampaign).at(idx).prop('fontColor')).toEqual(FLAGS[flag].color);
      } else {
        expect(wrapper.find(FlagCampaign).at(idx).exists()).toBe(false);
      }
    })
  });

  it('renders the correct title', () => {
    const wrapper = shallow(<CardCampaign {...defaultProps} />);

    expect(wrapper.find(`.${styles.title}`).text()).toEqual(defaultProps.brandName);
  });

  it('renders the correct description', () => {
    const wrapper = shallow(<CardCampaign {...defaultProps} />);

    expect(wrapper.find(`.${styles.description}`).text()).toEqual(defaultProps.cardData.description);
  });

  it('renders the correct price', () => {
    const wrapper = shallow(<CardCampaign {...defaultProps} />);
    const price = addDecimal(defaultProps.cardData.price);
    const priceText = defaultProps.cardData.hasDifferentPrices ? `${price} €` : `From ${price} €`;
    expect(wrapper.find(`.${styles.priceTag}`).text()).toEqual(priceText);
  });
});
