import React from 'react';
import { shallow } from 'enzyme';
import NavItem from './NavItem';
import Language from '../../assets/svgs/language';

const defaultProps = {
  icon: { component: <Language />, name: 'English' },
};

describe('<NavItem />', () => {
  it('renders without crashing', () => {
    shallow(<NavItem {...defaultProps} />);
  });

  it('renders provided icon', () => {
    const wrapper = shallow(<NavItem {...defaultProps} />);

    expect(wrapper.find(Language).exists()).toBe(true);
  });


  it('should render the correct title', () => {
    const wrapper = shallow(<NavItem {...defaultProps} />);

    expect(wrapper.find('span').text()).toEqual(defaultProps.icon.name);
  });
});
