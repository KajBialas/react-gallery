import React, { PureComponent } from "react";
import { StyledMenuOverlay, StyledMenuContent, StyledMenuElement, StyledMenuLink } from "./menu.style";

const NAVIGATION_ITEMS = [
  {
    id: 0,
    name: 'Home',
    url: '/',
  },
  {
    id: 1,
    name: 'Favorites',
    url: '/favorites',
  },
  {
    id: 3,
    name: 'Contact',
    url: '/contact',
  },
];

class MenuComponent extends PureComponent {

  renderMenuContent = () => NAVIGATION_ITEMS.map((menuItem, index) =>
    <StyledMenuElement key={menuItem.id}>
      <StyledMenuLink elementCount={index+1} to={menuItem.url}>
        {menuItem.name}
      </StyledMenuLink>
    </StyledMenuElement>
  );

  render() {
    const { isMenuOpened } = this.props;

    return (
        <StyledMenuOverlay isOpened={isMenuOpened}>
          <span/>
          <span/>
          <span/>
          <span/>
          <span/>
          <StyledMenuContent>
            {this.renderMenuContent()}
          </StyledMenuContent>
        </StyledMenuOverlay>
    );
  }
}

export default MenuComponent;
