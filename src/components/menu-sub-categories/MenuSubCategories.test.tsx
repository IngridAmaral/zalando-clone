import React from 'react';
import { shallow } from 'enzyme';
import MenuSubCategories from './MenuSubCategories';
import { TSubSubCategory } from '../header/Header';
import NAVCATEGORIES from '../../data/nav-categories';
import { filterEmptyCategrories } from '../../utils/filter-empty-categories';
import styles from './MenuSubCategories.module.scss';

const subList = NAVCATEGORIES.women.children[0].children;

const defaultProps = {
  subCategoryName: 'outfit',
  subCategories: subList
};

describe('<MenuSubCategories />', () => {
  it('renders without crashing', () => {
    shallow(<MenuSubCategories {...defaultProps} />);
  });

  it('renders the correct name', () => {
    const wrapper = shallow(<MenuSubCategories {...defaultProps} />);

    expect(wrapper.find(`.${styles.name}`).text()).toEqual(defaultProps.subCategoryName);
  });

  it('renders the correctly the subCategory', () => {
    const wrapper = shallow(<MenuSubCategories {...defaultProps} />);
    const excludeDash = filterEmptyCategrories(defaultProps.subCategories)
    
    expect(wrapper.find('li')).toHaveLength(excludeDash.length);
    
    excludeDash.forEach((subCategory: TSubSubCategory, idx: number) => {
      expect(wrapper.find('li').at(idx).text()).toEqual(subCategory.name);
    });

  });
});
