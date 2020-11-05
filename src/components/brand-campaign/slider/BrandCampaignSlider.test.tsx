import React from 'react';
import { shallow } from 'enzyme';
import BrandCampaignSlider from './BrandCampaignSlider';
import CardBrandItem from './card/CardBrandItem';
import { campaignBrandsData } from '../../../server/data/campaign-brands-data';

const defaultProps = {
  cards: campaignBrandsData[0].cards,
  brandName: campaignBrandsData[0].brandName,
};

describe('<BrandCampaignSlider />', () => {
  it('renders without crashing', () => {
    shallow(<BrandCampaignSlider {...defaultProps} />);
  });

  it('renders the correct number of cards', () => {
    const wrapper = shallow(<BrandCampaignSlider {...defaultProps} />);

    expect(wrapper.find(CardBrandItem)).toHaveLength(defaultProps.cards.length);
  });

  it('sends the correct props to each card', () => {
    const wrapper = shallow(<BrandCampaignSlider {...defaultProps} />);

    defaultProps.cards.forEach((card, idx) => {
      expect(wrapper.find(CardBrandItem).at(idx).prop('card')).toEqual(card);
      expect(wrapper.find(CardBrandItem).at(idx).prop('brandName')).toEqual(
        defaultProps.brandName
      );
    });
  });
});
