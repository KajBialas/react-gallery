import React, { PureComponent } from 'react';

// Components
import Menu from 'components/menu/menu.component.js';

// Styles
import { StyledHeader, StyledLogoLink, StyledHamburgerButton } from './header.style';
import { Wrapper } from 'styledElements';

// Icons
import LogoIcon from 'icons/logo.icon';


class HeaderComponent extends PureComponent {

  state = {
    isMenuOpened: false,
  };

  handleOpenMenu = () => this.setState((prevState) => {
    return {isMenuOpened: !prevState.isMenuOpened};
  });

  renderMenu = () => this.state.isMenuOpened ? <Menu/> : null;

  render() {
    const { isMenuOpened } = this.state;

    return (
      <StyledHeader>
        <Wrapper>
          <StyledLogoLink to="/">
            <LogoIcon/>
          </StyledLogoLink>
          <StyledHamburgerButton isOpened={isMenuOpened} onClick={this.handleOpenMenu}>
            <span/>
            <span/>
            <span/>
          </StyledHamburgerButton>
          {this.renderMenu()}
        </Wrapper>
      </StyledHeader>
    );
  }
}

export default HeaderComponent;
