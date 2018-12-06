import React, { PureComponent } from 'react';

// Components
import Menu from 'components/menu/menu.component.js';

// Styles
import { Header, LogoLink, HamburgerButton } from './header.style';
import { Wrapper } from 'styledElements';

// Icons
import LogoIcon from 'icons/logo.icon';


class HeaderComponent extends PureComponent {

  state = {
    isMenuOpened: false,
  };

  handleOpenMenu = () => this.setState({isMenuOpened: !this.state.isMenuOpened});

  renderMenu = () => this.state.isMenuOpened ? <Menu/> : null;

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
          {this.renderMenu()}
        </Wrapper>
      </Header>
    );
  }
}

export default HeaderComponent;
