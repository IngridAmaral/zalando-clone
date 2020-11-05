import React from 'react';
import { shallow } from 'enzyme';
import BrandCampaignBanner from './BrandCampaignBanner';
import styles from './BrandCampaignBanner.module.scss';
import { campaignBrandsData } from '../../../server/data/campaign-brands-data';
import Go from '../../../assets/svgs/Goback';

const defaultProps = {
  brand: campaignBrandsData[0],
};

const {
  brandName,
  background,
  fontColor,
  subTitle,
  linkText,
  mainImg,
} = defaultProps.brand;

const style = { background: `${background}`, color: `${fontColor}` };

describe('<BrandCampaignBanner />', () => {
  it('renders without crashing', () => {
    shallow(<BrandCampaignBanner {...defaultProps} />);
  });

  it('renders with correct styles', () => {
    const wrapper = shallow(<BrandCampaignBanner {...defaultProps} />);

    expect(
      wrapper.find(`.${styles.brandCampaignBanner}`).prop('style')
    ).toEqual(style);
  });

  it('should render the correct brand title', () => {
    const wrapper = shallow(<BrandCampaignBanner {...defaultProps} />);

    expect(wrapper.find(`.${styles.brand}`).text()).toEqual(brandName);
  });

  it('should render the correct subtitle', () => {
    const wrapper = shallow(<BrandCampaignBanner {...defaultProps} />);

    expect(wrapper.find(`.${styles.subTitle}`).text()).toEqual(subTitle);
  });

  it('should render the correct text link', () => {
    const wrapper = shallow(<BrandCampaignBanner {...defaultProps} />);

    expect(wrapper.find(`.${styles.link}`).find('span').text()).toEqual(
      linkText
    );
  });

  it('should render the correct image', () => {
    const wrapper = shallow(<BrandCampaignBanner {...defaultProps} />);

    expect(wrapper.find(`.${styles.mainImage}`).prop('src')).toEqual(mainImg);
  });

  it('should render the correct alt in image', () => {
    const wrapper = shallow(<BrandCampaignBanner {...defaultProps} />);

    expect(wrapper.find(`.${styles.mainImage}`).prop('alt')).toEqual(brandName);
  });

  it('should render the go component with prop', () => {
    const wrapper = shallow(<BrandCampaignBanner {...defaultProps} />);

    expect(wrapper.find(Go).prop('color')).toEqual(fontColor);
  });
});
