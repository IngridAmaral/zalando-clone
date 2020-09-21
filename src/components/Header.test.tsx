import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import styles from './Header.module.scss';


describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('closes the lateral menu when click outside', () => {
    const wrapper = shallow(<Header />);
    wrapper.setState({openMenu: true});
    wrapper.update();
    const event = {stopPropagation: () => {}, target: {id: "wrapper-menu" }};
    wrapper.find(`#wrapper-menu`).simulate('click', event);
    wrapper.update();

    expect(wrapper.find(`.${styles.lateralMenu}`).exists()).toBe(true);
  });

  it('opens the lateral menu when click menu icon', () => {
    const wrapper = shallow(<Header />);
    wrapper.find(`.${styles.openMenu}`).simulate('click');
    wrapper.update();
    
    expect(wrapper.find(`.${styles.lateralMenuOpen}`).exists()).toBe(true);
  });
  
  it('shows the menu dropdown when the mouse enter the nav items', () => {
    const wrapper = shallow(<Header />);
    wrapper.find(`.${styles.menuOptions}`).simulate('mouseenter');
    wrapper.update();

    expect(wrapper.find(`.${styles.dropdown}`).find(`.${styles.show}`).exists()).toBe(true);
  });

  it('keep showing the menu dropdown when the mouse is over the dropdown', () => {
    const wrapper = shallow(<Header />);
    wrapper.find(`.${styles.dropdown}`).simulate('mouseenter');
    wrapper.update();

    expect(wrapper.find(`.${styles.dropdown}`).find(`.${styles.show}`).exists()).toBe(true);
  });

  it('hides the menu dropdown when the mouse enter the nav items', () => {
    const wrapper = shallow(<Header />);
    wrapper.find(`.${styles.menuOptions}`).simulate('mouseleave');
    wrapper.update();

    expect(wrapper.find(`.${styles.dropdown}`).find(`.${styles.show}`).exists()).toBe(false);
  });

  it('hides the menu dropdown when the mouse is over the dropdown', () => {
    const wrapper = shallow(<Header />);
    wrapper.find(`.${styles.dropdown}`).simulate('mouseleave');
    wrapper.update();

    expect(wrapper.find(`.${styles.dropdown}`).find(`.${styles.show}`).exists()).toBe(false);
  });

  it('loads the correct category when hovering nav item', () => {
    const wrapper = shallow(<Header />);
    wrapper.find(`.${styles.option}`).forEach((option) => {
      const optionText = option.find('button').text().replace(/[^A-Z0-9]+/ig, '');
      option.simulate('mouseover');
      wrapper.update();

      expect(wrapper.find(`#${optionText}`).exists()).toBe(true);
    })
  });
});
