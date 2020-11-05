import React from 'react';
import { shallow } from 'enzyme';
import BrandCampaign from './BrandCampaign';
import BrandCampaignBanner from './banner/BrandCampaignBanner';
import BrandCampaignSlider from './slider/BrandCampaignSlider';
import BrandCampaignFollow from './follow/BrandCampaignFollow';
import { campaignBrandsData } from '../../server/data/campaign-brands-data';
import styles from './BrandCampaign.module.scss';

const defaultProps = {
  brand: campaignBrandsData[0],
};

const { brandName, fontColor, cards, cardsBackground } = defaultProps.brand;

describe('<BrandCampaign />', () => {
  it('renders without crashing', () => {
    shallow(<BrandCampaign {...defaultProps} />);
  });

  it('renders banner componenet with correct props', () => {
    const wrapper = shallow(<BrandCampaign {...defaultProps} />);

    expect(wrapper.find(BrandCampaignBanner).prop('brand')).toEqual(
      defaultProps.brand
    );
  });

  it('renders correctly the style of bottom campaign wrapper', () => {
    const wrapper = shallow(<BrandCampaign {...defaultProps} />);
    const style = { background: `${cardsBackground}`, color: `${fontColor}` };

    expect(
      wrapper.find(`.${styles.bottomBrandCampaignContainer}`).prop('style')
    ).toEqual(style);
  });

  it('renders the card campaign slider', () => {
    const wrapper = shallow(<BrandCampaign {...defaultProps} />);

    expect(wrapper.find(BrandCampaignSlider).exists()).toBe(true);
  });

  it('renders the correct props in campaign slider', () => {
    const wrapper = shallow(<BrandCampaign {...defaultProps} />);

    expect(wrapper.find(BrandCampaignSlider).prop('cards')).toEqual(cards);
    expect(wrapper.find(BrandCampaignSlider).prop('brandName')).toEqual(
      brandName
    );
  });

  it('renders the follow brand', () => {
    const wrapper = shallow(<BrandCampaign {...defaultProps} />);

    expect(wrapper.find(BrandCampaignFollow).exists()).toBe(true);
  });

  it('renders the correct props in follow brand', () => {
    const wrapper = shallow(<BrandCampaign {...defaultProps} />);

    expect(wrapper.find(BrandCampaignFollow).prop('fontColor')).toEqual(
      fontColor
    );

    expect(wrapper.find(BrandCampaignFollow).prop('brandName')).toEqual(
      brandName
    );
  });
});
