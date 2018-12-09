import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import HeaderComponent from '../header.component';
import { StyledHamburgerButton } from '../header.style';

describe('HeaderComponent', () => {
  it('should shallows correctly if state.isMenuOpened is false', () => {
    const component = shallow(<HeaderComponent />);

    expect(component).toMatchSnapshot();
  });

  it('should shallows correctly if state.isMenuOpened is true', () => {
    const component = shallow(<HeaderComponent />);
    component.setState({ isMenuOpened: true });

    expect(component).toMatchSnapshot();
  });

  it('should be call function handleOpenMenu onClick StyledHamburgerButton', () => {
    const handleOpenMenu = jest.fn();
    const hamburgerButtonComponent = shallow(<StyledHamburgerButton onClick={handleOpenMenu}/>);

    hamburgerButtonComponent.simulate('click');

    expect(handleOpenMenu).toHaveBeenCalled();
  });

  it('method handleOpenMenu should set state.isMenuOpened equal true if was false', () => {
    const component = shallow(<HeaderComponent />);
    component.instance().state.isMenuOpened = false;
    component.instance().handleOpenMenu();

    expect(component.instance().state.isMenuOpened).toEqual(true);
  });

  it('method handleOpenMenu should set state.isMenuOpened equal false if was true', () => {
    const component = shallow(<HeaderComponent />);
    component.instance().state.isMenuOpened = true;
    component.instance().handleOpenMenu();

    expect(component.instance().state.isMenuOpened).toEqual(false);
  });
});