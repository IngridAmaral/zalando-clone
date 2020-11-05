import React from 'react';
import { shallow } from 'enzyme';
import Flag from './Flag';
import styles from './Flag.module.scss';
import { FLAGS } from '../../../../../server/data/flags';

const defaultProps = {
  flagText: FLAGS['isNew'].flagText,
  background: FLAGS['isNew'].background,
  fontColor: FLAGS['isNew'].color,
};

const style = {
  color: `${defaultProps.fontColor}`,
  background: `${defaultProps.background}`,
};

describe('<Flag />', () => {
  it('renders without crashing', () => {
    shallow(<Flag {...defaultProps} />);
  });

  it('renders the correct flag text', () => {
    const wrapper = shallow(<Flag {...defaultProps} />);

    expect(wrapper.find(`.${styles.flag}`).text()).toBe(defaultProps.flagText);
  });

  it('should render the flag with the correct color style', () => {
    const wrapper = shallow(<Flag {...defaultProps} />);

    expect(wrapper.find(`.${styles.flag}`).prop('style')).toEqual(style);
  });
});
