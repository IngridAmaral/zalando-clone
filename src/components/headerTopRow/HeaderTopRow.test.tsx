import React from 'react';
import { shallow } from 'enzyme';
import HeaderTopRow from './HeaderTopRow';
import { GENDERS, ICONS } from '../header/Header';
import NavItem from '../navItem/NavItem';
import styles from './HeaderTopRow.module.scss';

const defaultProps = {
  changeGender: () => { },
  activeGender: 'women',
  genders: GENDERS,
  icons: ICONS,
};

describe('<HeaderTopRow />', () => {
  it('renders without crashing', () => {
    shallow(<HeaderTopRow {...defaultProps} />);
  });

  it('renders the correct number of gender options', () => {
    const wrapper = shallow(<HeaderTopRow {...defaultProps} />);

    expect(wrapper.find(`.${styles.gender}`)).toHaveLength(GENDERS.length);
  });

  it('renders the correct number of nav icons', () => {
    const wrapper = shallow(<HeaderTopRow {...defaultProps} />);

    expect(wrapper.find(NavItem)).toHaveLength(ICONS.length);
  });

  it('triggers the function on click and makes sure the correct gender is displayed', () => {
    const click = jest.fn();
    const wrapper = shallow(<HeaderTopRow {...defaultProps} changeGender={click} />);

    GENDERS.forEach((gender, idx) => {
      wrapper.find('.genderSelect').at(idx).simulate('click');

      expect(wrapper.find('.genderSelect').at(idx).text()).toEqual(gender);
      expect(click).toHaveBeenCalled();
    })
  });
});
