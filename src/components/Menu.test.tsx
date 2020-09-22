import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import MenuListCategory from './MenuListCategory';
import MenuListSubCategory from './MenuListSubCategory';
import { GENDERS } from './Header';
import styles from './Menu.module.scss';

const categories = {
  name: 'Get the Look',
  children: [
    {name: 'All Outfits', children: [{name: 'outfits', children: [{name: 'out'}]}]},
    {name: 'Classic Outfits', children: [{name: 'outfits classic', children: [{name: 'out class'}]}]}
  ]
}

const defaultProps = {
  onClose: () => {},
  onChangeGender: () => {},
  activeGender: 'women',
  genders: GENDERS,
  isMenuOpen: true,
  categories: [categories]
};

describe('<Menu />', () => {
  it('renders without crashing', () => {
    shallow(<Menu {...defaultProps} />);
  });

  it('shrinks the menu header on scroll', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);
    const event = {currentTarget: {scrollTop: 51 }};
    wrapper.find(`.${styles.menuContainer}`).simulate('scroll', event);
    wrapper.update();

    expect(wrapper.find(`.${styles.shrink}`).exists()).toBe(true);
  });

  it('expands the menu header on scroll', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);
    const event = {currentTarget: {scrollTop: 40 }};
    wrapper.find(`.${styles.menuContainer}`).simulate('scroll', event);
    wrapper.update();

    expect(wrapper.find(`.${styles.shrink}`).exists()).toBe(false);
  });

  it('triggers the close function when click the close button', () => {
    const click = jest.fn();
    const wrapper = shallow(<Menu {...defaultProps} onClose={click} />);
    wrapper.find(`.${styles.onCloseMenu}`).simulate('click');
    wrapper.update();
    
    expect(click).toHaveBeenCalled();
  });

  it('should render the menu list', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);

    expect(wrapper.find(`.${styles.menuList}`));
  });

  it('should render the menu list component', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);

    expect(wrapper.find(MenuListCategory).exists()).toBe(true);
  });

  it('should render the subcategories list if openCategories is true', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);
    wrapper.setState({openCategory: true, categoryName: 'Get the Look'});
    wrapper.update();

    expect(wrapper.find(`.${styles.categoriesWrapper}`).exists()).toBe(true);
  });

  it('should render the correct number of subcategories', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);
    wrapper.setState({openCategory: true, categoryName: 'Get the Look'});
    wrapper.update();

    defaultProps.categories.forEach((category) => {
      if (category.name === wrapper.props().categoryName) {
        expect(wrapper.find(MenuListSubCategory)).toHaveLength(category.children.length)
      }
    })
  });

  it('renders the correct number of genders', () => {
    const wrapper = shallow(<Menu {...defaultProps} />);

    expect(wrapper.find(`.${styles.selectGender}`).children()).toHaveLength(defaultProps.genders.length);
  });

  it('triggers onChangeGender function on click and checks if it renders the corret gender', () => {
    const click = jest.fn();
    const wrapper = shallow(<Menu {...defaultProps} onChangeGender={click} />);
    
    defaultProps.genders.forEach((gender, idx) => {
      wrapper.find(`.${styles.selectGender}`).childAt(idx).simulate('click');

      expect(click).toHaveBeenCalled()
      expect(wrapper.find(`.${styles.selectGender}`).childAt(idx).text()).toEqual(gender);
    })
  });
});
