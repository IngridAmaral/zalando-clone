import React from 'react';
import { shallow } from 'enzyme';
import Categories from './Categories';
import Caret from '../../../assets/svgs/Caret';
import NAVCATEGORIES from '../../../server/data/nav-categories';
import styles from './Categories.module.scss';

const list = NAVCATEGORIES.women.children;

const defaultProps = {
  selectCategory: () => {},
  categories: list,
};

describe('<Categories />', () => {
  it('renders without crashing', () => {
    shallow(<Categories {...defaultProps} />);
  });

  it('renders the correctly the category', () => {
    const wrapper = shallow(<Categories {...defaultProps} />);

    defaultProps.categories.forEach((category, idx) => {
      expect(wrapper.find(`.${styles.item}`).at(idx).text()).toEqual(
        category.name
      );
      expect(wrapper.find(Caret).at(idx).exists()).toBe(false);
    });

    expect(wrapper.find('li')).toHaveLength(defaultProps.categories.length);
  });

  it('should render the caret', () => {
    const wrapper = shallow(<Categories {...defaultProps} hasCaret={true} />);

    expect(wrapper.find(Caret).exists()).toBe(true);
  });

  it('should call function when click a category', () => {
    const clickFunction = jest.fn();
    const wrapper = shallow(
      <Categories {...defaultProps} selectCategory={clickFunction} />
    );

    defaultProps.categories.forEach((_, idx) => {
      wrapper.find('li').at(idx).simulate('click');

      expect(clickFunction).toHaveBeenCalled();
    });
  });
});
