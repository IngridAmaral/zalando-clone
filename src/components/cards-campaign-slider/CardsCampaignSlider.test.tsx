import React from 'react';
import { shallow } from 'enzyme';
import CardsCampaignSlider from './CardsCampaignSlider';
import CardCampaign from '../card-campaign/CardCampaign';
import { campaignBrandsData } from '../../server/data/campaign-brands-data';

const defaultProps = {
  cards: campaignBrandsData[0].cards,
  brandName: campaignBrandsData[0].brandName,
};

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

    defaultProps.cards.forEach((card, idx) => {
      expect(wrapper.find(CardCampaign).at(idx).prop('card')).toEqual(card);
      expect(wrapper.find(CardCampaign).at(idx).prop('brandName')).toEqual(
        defaultProps.brandName
      );
    });
  });
});
