import React from 'react';
import { shallow } from 'enzyme';
import SubCategories from './SubCategories';
import { TSubSubCategory } from '../../header/Header';
import NAVCATEGORIES from '../../../server/data/nav-categories';
import { filterEmptyCategrories } from '../../../utils/filter-empty-categories';
import styles from './SubCategories.module.scss';

const subList = NAVCATEGORIES.women.children[0].children;

const defaultProps = {
  subCategoryName: 'outfit',
  subCategories: subList,
};

describe('<SubCategories />', () => {
  it('renders without crashing', () => {
    shallow(<SubCategories {...defaultProps} />);
  });

  it('renders the correct name', () => {
    const wrapper = shallow(<SubCategories {...defaultProps} />);

    expect(wrapper.find(`.${styles.name}`).text()).toEqual(
      defaultProps.subCategoryName
    );
  });

  it('renders the correctly the subCategory', () => {
    const wrapper = shallow(<SubCategories {...defaultProps} />);
    const excludeDash = filterEmptyCategrories(defaultProps.subCategories);

    expect(wrapper.find('li')).toHaveLength(excludeDash.length);

    excludeDash.forEach((subCategory: TSubSubCategory, idx: number) => {
      expect(wrapper.find('li').at(idx).text()).toEqual(subCategory.name);
    });
  });
});
