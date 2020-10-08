import React from 'react';
import { shallow } from 'enzyme';
import CardsCampaignSlider from './CardsCampaignSlider';
import CardCampaign from '../card-campaign/CardCampaign';
import { TCardData } from '../campaign-wrapper/CampaignWrapper';
import { campaignData } from '../../data/campaign-data';

const defaultProps = {
  cards: campaignData[0].cards,
  brandName: campaignData[0].brandName
}

describe('<CardsCampaignSlider />', () => {
  it('renders without crashing', () => {
    shallow(<CardsCampaignSlider {...defaultProps} />);
  });

  it('renders the correct number of cards', () => {
    const wrapper = shallow(<CardsCampaignSlider {...defaultProps} />);

    expect(wrapper.find(CardCampaign)).toHaveLength(defaultProps.cards.length);
  });

  it('sends the correct props to each card', () => {
    const wrapper = shallow(<CardsCampaignSlider {...defaultProps} />);

    defaultProps.cards.forEach((card: TCardData, idx: number) => {
      expect(wrapper.find(CardCampaign).at(idx).prop('cardData')).toEqual(card);
      expect(wrapper.find(CardCampaign).at(idx).prop('brandName')).toEqual(defaultProps.brandName);
    });
  });
});
