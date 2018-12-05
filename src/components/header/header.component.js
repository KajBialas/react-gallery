import React, { PureComponent } from 'react';

// Styles
import { Header, LogoLink, HamburgerButton, MenuOverlay } from './header.style';
import { Wrapper } from 'styledElements';

// Icons
import LogoIcon from 'icons/logo.icon';

const NAVIGATION_ITEMS_MOCK = [
  {
    id: 0,
    name: 'Home',
    url: '/',
  },
  {
    id: 1,
    name: 'Cart',
    url: '/cart',
  },
];

class HeaderComponent extends PureComponent {

  state = {
    isMenuOpened: false,
  };

  handleOpenedmenu = () => this.setState({isMenuOpened: !this.state.isMenuOpened});

  render() {
    const { isMenuOpened } = this.state;
    return (
      <Header>
        <Wrapper>
          <LogoLink to="/">
            <LogoIcon/>
          </LogoLink>
          <HamburgerButton isOpened={isMenuOpened} onClick={this.handleOpenedmenu}>
            <span/>
            <span/>
            <span/>
          </HamburgerButton>
        </Wrapper>
      <MenuOverlay isOpened={isMenuOpened}>
        <span/>
        <span/>
        <span/>
        <span/>
        <span/>
      </MenuOverlay>
      </Header>
    );
  }
}

export default HeaderComponent;
