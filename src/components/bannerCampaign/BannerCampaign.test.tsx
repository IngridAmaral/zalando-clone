import React from 'react';
import { shallow } from 'enzyme';
import BannerCampaign from './BannerCampaign';
import styles from './BannerCampaign.module.scss';
import { campaignData } from '../../data/campaign-data';


const { brandName, background, fontColor, subTitle, linkText, mainImg, text } = campaignData[0];

const defaultProps = {
  brandName: brandName,
  background: background,
  fontColor: fontColor,
  subTitle: subTitle,
  linkText: linkText,
  mainImg: mainImg,
  text: text
}

const style = { background: `${defaultProps.background}`, color: `${defaultProps.fontColor}` }

describe('<BannerCampaign />', () => {
  it('renders without crashing', () => {
    shallow(<BannerCampaign {...defaultProps} />);
  });

  it('renders with correct styles', () => {
    const wrapper = shallow(<BannerCampaign {...defaultProps} />);

    expect(wrapper.find(`.${styles.bannerCampaignContainer}`).prop('style')).toEqual(style);
  });

  it('should render the correct brand title', () => {
    const wrapper = shallow(<BannerCampaign {...defaultProps} />);

    expect(wrapper.find(`.${styles.brand}`).text()).toEqual(brandName);
  });

  it('should render the correct subtitle', () => {
    const wrapper = shallow(<BannerCampaign {...defaultProps} />);

    expect(wrapper.find(`.${styles.subTitle}`).text()).toEqual(subTitle);
  });

  it('should render the correct text link', () => {
    const wrapper = shallow(<BannerCampaign {...defaultProps} />);

    expect(wrapper.find(`.${styles.link}`).find('span').text()).toEqual(linkText);
  });

  it('should render the correct image', () => {
    const wrapper = shallow(<BannerCampaign {...defaultProps} />);

    expect(wrapper.find(`.${styles.mainImage}`).prop('src')).toEqual(mainImg);
  });

  it('should render the correct alt in image', () => {
    const wrapper = shallow(<BannerCampaign {...defaultProps} />);

    expect(wrapper.find(`.${styles.mainImage}`).prop('alt')).toEqual(text);
  });
});
