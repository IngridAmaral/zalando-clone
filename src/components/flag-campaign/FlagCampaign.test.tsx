import React from 'react';
import { shallow } from 'enzyme';
import FlagCampaign from './FlagCampaign';
import styles from './FlagCampaign.module.scss';
import { FLAGS } from '../../data/flags';

const defaultProps = {
  flagText: FLAGS['isNew'].flagText,
  background: FLAGS['isNew'].background,
  fontColor: FLAGS['isNew'].color
}

describe('<FlagCampaign />', () => {
  it('renders without crashing', () => {
    shallow(<FlagCampaign {...defaultProps}/>);
  });

  it('renders the correct flag text', () => {
    const wrapper = shallow(<FlagCampaign {...defaultProps}/>);

    expect(wrapper.find(`.${styles.flag}`).text()).toBe(defaultProps.flagText);
  });
});
