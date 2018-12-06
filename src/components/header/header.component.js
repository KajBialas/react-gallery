import React, { PureComponent } from 'react';

// Components
import Menu from 'components/menu/menu.component.js';

// Styles
import { Header, LogoLink, HamburgerButton, MenuOverlay } from './header.style';
import { Wrapper } from 'styledElements';

// Icons
import LogoIcon from 'icons/logo.icon';


class HeaderComponent extends PureComponent {

  state = {
    isMenuOpened: false,
  };

  handleOpenMenu = () => this.setState({isMenuOpened: !this.state.isMenuOpened});

  render() {
    const { isMenuOpened } = this.state;

    return (
      <Header>
        <Wrapper>
          <LogoLink to="/">
            <LogoIcon/>
          </LogoLink>
          <HamburgerButton isOpened={isMenuOpened} onClick={this.handleOpenMenu}>
            <span/>
            <span/>
            <span/>
          </HamburgerButton>
          <Menu isMenuOpened={isMenuOpened} />
        </Wrapper>
      </Header>
    );
  }
}

export default HeaderComponent;
