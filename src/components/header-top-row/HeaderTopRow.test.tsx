import React from 'react';
import { shallow } from 'enzyme';
import HeaderTopRow from './HeaderTopRow';
import { GENDERS, ICONS } from '../header/Header';
import NavItem from '../nav-item/NavItem';
import styles from './HeaderTopRow.module.scss';

const defaultProps = {
  changeGender: () => {},
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

    expect(wrapper.find(`.${styles.gender}`)).toHaveLength(
      defaultProps.genders.length
    );
  });

  it('renders the correct number of nav icons', () => {
    const wrapper = shallow(<HeaderTopRow {...defaultProps} />);

    expect(wrapper.find(NavItem)).toHaveLength(defaultProps.icons.length);
  });

  it('triggers the function on click and makes sure the correct gender is displayed', () => {
    const clickFunction = jest.fn();
    const wrapper = shallow(
      <HeaderTopRow {...defaultProps} changeGender={clickFunction} />
    );

    GENDERS.forEach((_, idx) => {
      wrapper.find(`.${styles.genderSelect}`).at(idx).simulate('click');

      expect(clickFunction).toHaveBeenCalled();
    });
  });
});
