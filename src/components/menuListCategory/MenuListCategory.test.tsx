import React from 'react';
import { shallow } from 'enzyme';
import MenuListCategory from './MenuListCategory';
import Caret from '../../assets/svgs/caret';
import NAVCATEGORIES from '../../data/navCategories';
import styles from './MenuListSubCategory.module.scss';

const list = NAVCATEGORIES.women.children;

const defaultProps = {
  handleCategory: () => { },
  categoriesList: list
};

describe('<MenuListCategory />', () => {
  it('renders without crashing', () => {
    shallow(<MenuListCategory {...defaultProps} />);
  });

  it('renders the correctly the options', () => {
    const wrapper = shallow(<MenuListCategory {...defaultProps} />);

    defaultProps.categoriesList.forEach((option, idx) => {
      expect(wrapper.find(`.${styles.item}`).at(idx).text()).toEqual(option.name);
      expect(wrapper.find(Caret).at(idx).exists()).toBe(false);
    });

    expect(wrapper.find('li')).toHaveLength(defaultProps.categoriesList.length);
  });

  it('should render the caret', () => {
    const wrapper = shallow(<MenuListCategory {...defaultProps} hasCaret={true} />);

    expect(wrapper.find(Caret).exists()).toBe(true);
  });
});
