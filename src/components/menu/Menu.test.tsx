import React from 'react';
import { shallow } from 'enzyme';
import Menu, { SCROLL_THRESHOLD, moreOptions } from './Menu';
import MenuCategories from '../menu-categories/MenuCategories';
import MenuSubCategories from '../menu-sub-categories/MenuSubCategories';
import { GENDERS } from '../header/Header';
import NAVCATEGORIES from '../../data/nav-categories';
import styles from './Menu.module.scss';

const activeGenderCategories = NAVCATEGORIES.women.children;

const defaultProps = {
  onClose: () => {},
  onChangeGender: () => {},
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
    // const handleCategoryFunc = () => {};

    expect(wrapper.find(MenuCategories).exists()).toBe(true);

    wrapper.find(MenuCategories).forEach((menuList, idx) => {
      if (menuList.prop('handleCategory')) {
        expect(menuList.prop('categories')).toEqual(defaultProps.categories);
        expect(menuList.prop('hasCaret')).toBe(true);
        // expect(menuList.prop('handleCategory')).toBe(handleCategoryFunc);
      } else {
        expect(menuList.prop('categories')).toEqual(moreOptions[idx - 1]);
      }
    });
  });

  describe('when `openCategories` is true', () => {
    it('should render the subcategories list', () => {
      const wrapper = shallow(<Menu {...defaultProps} />);

      wrapper.find(MenuCategories).forEach((menuList) => {
        menuList.prop('handleCategory')?.(defaultProps.categories[0]);
        wrapper.update();

        expect(wrapper.find(MenuSubCategories).exists()).toBe(true);
      });
    });

    it('should render the correct number of subcategories', () => {
      const wrapper = shallow(<Menu {...defaultProps} />);

      wrapper.find(MenuCategories).forEach((menuList) => {
        menuList.prop('handleCategory')?.(defaultProps.categories[0]);
        wrapper.update();

        defaultProps.categories.forEach((category) => {
          if (category.name === wrapper.props().categoryName) {
            expect(menuList).toHaveLength(category.children.length);
          }
        });
      });
    });
  });

  it('renders provided genders', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);

    wrapper
      .find(`.${styles.selectGender}`)
      .children()
      .forEach((gender, idx) => {
        expect(gender.text()).toEqual(defaultProps.genders[idx]);
      });
  });

  it('triggers `onChangeGender` on click and checks if it renders the corret gender', () => {
    defaultProps.genders.forEach((gender, idx) => {
      const click = jest.fn();
      const wrapper = shallow(
        <Menu {...defaultProps} onChangeGender={click} />
      );
      wrapper.find(`.${styles.selectGender}`).childAt(idx).simulate('click');

      expect(click).toHaveBeenCalledTimes(1);
      expect(
        wrapper.find(`.${styles.selectGender}`).childAt(idx).text()
      ).toEqual(gender);
    });
  });

  it('renders more options with the correct list passed as props', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);

    moreOptions.forEach((optionsList, idx) => {
      expect(
        wrapper
          .find(MenuCategories)
          .at(idx + 1)
          .props().categories
      ).toStrictEqual(optionsList);
    });
  });

  it('should close sub categories and reset the name when click the go back icon', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);
    wrapper.setState({ openCategory: true, categoryName: 'Get the Look' });
    wrapper.update();

    wrapper.find(`.${styles.goBack}`).simulate('click');

    expect(wrapper.find(`.${styles.categoriesWrapper}`).exists()).toBe(false);
  });
});
