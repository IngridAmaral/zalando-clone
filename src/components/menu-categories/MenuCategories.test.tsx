import React from 'react';
import { shallow } from 'enzyme';
import MenuCategories from './MenuCategories';
import Caret from '../../assets/svgs/Caret';
import NAVCATEGORIES from '../../data/nav-categories';
import styles from './MenuCategories.module.scss';

const list = NAVCATEGORIES.women.children;

const defaultProps = {
  handleCategory: () => {},
  categories: list,
};

describe('<MenuCategories />', () => {
  it('renders without crashing', () => {
    shallow(<MenuCategories {...defaultProps} />);
  });

  it('renders the correctly the category', () => {
    const wrapper = shallow(<MenuCategories {...defaultProps} />);

    defaultProps.categories.forEach((category, idx) => {
      expect(wrapper.find(`.${styles.item}`).at(idx).text()).toEqual(
        category.name
      );
      expect(wrapper.find(Caret).at(idx).exists()).toBe(false);
    });

    expect(wrapper.find('li')).toHaveLength(defaultProps.categories.length);
  });

  it('should render the caret', () => {
    const wrapper = shallow(
      <MenuCategories {...defaultProps} hasCaret={true} />
    );

    expect(wrapper.find(Caret).exists()).toBe(true);
  });

  it('should call function when click a category', () => {
    const clickFunction = jest.fn();
    const wrapper = shallow(
      <MenuCategories {...defaultProps} handleCategory={clickFunction} />
    );

    defaultProps.categories.forEach((_, idx) => {
      wrapper.find('li').at(idx).simulate('click');

      expect(clickFunction).toHaveBeenCalled();
    });
  });
});
