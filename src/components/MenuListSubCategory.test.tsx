import React from 'react';
import { shallow } from 'enzyme';
import MenuListSubCategory, { TSubCategory } from './MenuListSubCategory';
import NAVCATEGORIES from './navCategories';
import { filterEmptyNames } from '../utils/filterEmptyNames';
import styles from './MenuListSubCategory.module.scss';

const subList = NAVCATEGORIES.women.children[0].children;

const defaultProps = {
  subCategoryTitle: 'outfit',
  subCategoryList: subList
};

describe('<MenuListSubCategory />', () => {
  it('renders without crashing', () => {
    shallow(<MenuListSubCategory {...defaultProps} />);
  });

  it('renders the correct title', () => {
    const wrapper = shallow(<MenuListSubCategory {...defaultProps} />);

    expect(wrapper.find(`.${styles.title}`).text()).toEqual(defaultProps.subCategoryTitle);
  });

  it('renders the correctly the options', () => {
    const wrapper = shallow(<MenuListSubCategory {...defaultProps} />);
    const excludeDash = filterEmptyNames(defaultProps.subCategoryList)
  
    excludeDash.forEach((option: TSubCategory, idx: number) => {
      expect(wrapper.find('li').at(idx).text()).toEqual(option.name);
      expect(wrapper.find('li').at(idx).text()).not.toEqual('--');
    });

    expect(wrapper.find('li')).toHaveLength(excludeDash.length);
  });
});