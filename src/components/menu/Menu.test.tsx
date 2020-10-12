import React from 'react';
import { shallow } from 'enzyme';
import Menu, { SCROLL_THRESHOLD, moreOptions } from './Menu';
import MenuListCategory from '../menu-list-category/MenuListCategory';
import MenuListSubCategory from '../menu-list-sub-category/MenuListSubCategory';
import { GENDERS } from '../header/Header';
import NAVCATEGORIES from '../../data/nav-categories';
import styles from './Menu.module.scss';


const activeGenderCategories = NAVCATEGORIES.women.children;

const defaultProps = {
  onClose: () => { },
  onChangeGender: () => { },
  activeGender: 'women',
  genders: GENDERS,
  isMenuOpen: true,
  categories: activeGenderCategories,
};

describe('<Menu />', () => {
  it('renders without crashing', () => {
    shallow(<Menu {...defaultProps} />);
  });

  it('shrinks the menu header on scroll', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);
    const eventShrink = { currentTarget: { scrollTop: SCROLL_THRESHOLD + 1 } };

    expect(wrapper.find(`.${styles.shrink}`).exists()).toBe(false);

    wrapper.find(`.${styles.menuContainer}`).simulate('scroll', eventShrink);
    wrapper.update();

    expect(wrapper.find(`.${styles.shrink}`).exists()).toBe(true);
  });

  it('expands the menu header on scroll', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);
    const eventShrink = { currentTarget: { scrollTop: SCROLL_THRESHOLD + 1 } }; // true
    const eventExpand = { currentTarget: { scrollTop: SCROLL_THRESHOLD - 1 } };

    wrapper.find(`.${styles.menuContainer}`).simulate('scroll', eventShrink);
    wrapper.update();

    expect(wrapper.find(`.${styles.shrink}`).exists()).toBe(true);


    wrapper.find(`.${styles.menuContainer}`).simulate('scroll', eventExpand);
    wrapper.update();

    expect(wrapper.find(`.${styles.shrink}`).exists()).toBe(false);
  });

  it('triggers `onClose` when click the close button', () => {
    const click = jest.fn();
    const wrapper = shallow(<Menu {...defaultProps} onClose={click} />);
    wrapper.find(`.${styles.onCloseMenu}`).simulate('click');

    expect(click).toHaveBeenCalled();
  });

  it('should render the menu list component', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);

    expect(wrapper.find(MenuListCategory).exists()).toBe(true);
  });

  describe('when `openCategories` is true', () => {
    it('should render the subcategories list', () => {
      const wrapper = shallow(<Menu {...defaultProps} />);
      wrapper.find(MenuListCategory).at(0).prop('handleCategory')(defaultProps.categories[0]);
      wrapper.update();

      expect(wrapper.find(`.${styles.categoriesWrapper}`).exists()).toBe(true);
    });

    it('should render the correct number of subcategories', () => {
      const wrapper = shallow(<Menu {...defaultProps} />);
      wrapper.find(MenuListCategory).at(0).prop('handleCategory')(defaultProps.categories[0]);
      wrapper.update();

      defaultProps.categories.forEach((category) => {
        if (category.name === wrapper.props().categoryName) {
          expect(wrapper.find(MenuListSubCategory)).toHaveLength(category.children.length)
        }
      })
    });
  });

  it('renders provided genders', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);

    expect(wrapper.find(`.${styles.selectGender}`).children()).toHaveLength(defaultProps.genders.length);
  });

  it('triggers `onChangeGender` on click and checks if it renders the corret gender', () => {
    defaultProps.genders.forEach((gender, idx) => {
      const click = jest.fn();
      const wrapper = shallow(<Menu {...defaultProps} onChangeGender={click} />);
      wrapper.find(`.${styles.selectGender}`).childAt(idx).simulate('click');

      expect(click).toHaveBeenCalledTimes(1);
      expect(wrapper.find(`.${styles.selectGender}`).childAt(idx).text()).toEqual(gender);
    })
  });

  it('renders more options with the correct list passed as props', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);

    moreOptions.forEach((optionsList, idx) => {
      expect(wrapper.find(MenuListCategory).at(idx + 1).props().categoriesList).toStrictEqual(optionsList);
    })
  });

  it('should close sub categories and reset the name when click the go back icon', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);
    wrapper.setState({ openCategory: true, categoryName: 'Get the Look' });
    wrapper.update();

    wrapper.find(`.${styles.goBack}`).simulate('click');

    expect(wrapper.find(`.${styles.categoriesWrapper}`).exists()).toBe(false)
  });
});
