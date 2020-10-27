import React from 'react';
import { shallow } from 'enzyme';
import CardCampaign from './CardCampaign';
import FlagCampaign from '../flag-campaign/FlagCampaign';
import styles from './CardCampaign.module.scss';
import { campaignData } from '../../server/data/campaign-data';
import { addDecimal } from '../../utils/add-decimal';
import Wish from '../../assets/svgs/Wish';
import { FLAGS } from '../../server/data/flags';

const defaultProps = {
  card: campaignData[0].cards[0],
  brandName: campaignData[0].brandName,
};

describe('<CardCampaign />', () => {
  it('renders without crashing', () => {
    shallow(<CardCampaign {...defaultProps} />);
  });

  it('renders the correct image', () => {
    const wrapper = shallow(<CardCampaign {...defaultProps} />);

    expect(wrapper.find('img').prop('alt')).toEqual(
      defaultProps.card.description
    );
    expect(wrapper.find('img').prop('src')).toEqual(
      defaultProps.card.productImageLink
    );
  });

  it('renders wish', () => {
    const wrapper = shallow(<CardCampaign {...defaultProps} />);

    expect(wrapper.find(Wish).exists()).toBe(true);
  });

  it('renders the flags correctly', () => {
    const wrapper = shallow(<CardCampaign {...defaultProps} />);

    Object.keys(FLAGS).forEach((flag, idx) => {
      if (defaultProps.card[flag]) {
        expect(wrapper.find(FlagCampaign).at(idx).prop('flagText')).toEqual(
          FLAGS[flag].flagText
        );
        expect(wrapper.find(FlagCampaign).at(idx).prop('background')).toEqual(
          FLAGS[flag].background
        );
        expect(wrapper.find(FlagCampaign).at(idx).prop('fontColor')).toEqual(
          FLAGS[flag].color
        );
      } else {
        expect(wrapper.find(FlagCampaign).at(idx).exists()).toBe(false);
      }
    });
  });

  it('renders the correct title', () => {
    const wrapper = shallow(<CardCampaign {...defaultProps} />);

    expect(wrapper.find(`.${styles.title}`).text()).toEqual(
      defaultProps.brandName
    );
  });

  it('renders the correct description', () => {
    const wrapper = shallow(<CardCampaign {...defaultProps} />);

    expect(wrapper.find(`.${styles.description}`).text()).toEqual(
      defaultProps.card.description
    );
  });

  it('renders the extra information', () => {
    const wrapper = shallow(<CardCampaign {...defaultProps} />);

    if (defaultProps.card.extraInformation) {
      expect(wrapper.find(`.${styles.extraInformation}`).text()).toEqual(
        defaultProps.card.extraInformation
      );
    } else {
      expect(wrapper.find(`.${styles.extraInformation}`).exists()).toBe(false);
    }
  });

  it('renders the correct price when has different prices', () => {
    const wrapper = shallow(
      <CardCampaign
        {...defaultProps}
        card={{ ...campaignData[0].cards[0], hasDifferentPrices: true }}
      />
    );
    const price = addDecimal(defaultProps.card.price);

    expect(wrapper.find(`.${styles.priceTag}`).text()).toEqual(
      `From ${price} €`
    );
  });

  it('renders the correct price when doesnt have different prices', () => {
    const wrapper = shallow(
      <CardCampaign
        {...defaultProps}
        card={{ ...campaignData[0].cards[0], hasDifferentPrices: false }}
      />
    );
    const price = addDecimal(defaultProps.card.price);

    expect(wrapper.find(`.${styles.priceTag}`).text()).toEqual(`${price} €`);
  });
});
