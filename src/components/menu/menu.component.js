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
    name: 'Favourites',
    url: '/favourites',
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
      <StyledMenuLink count={index+1} to={menuItem.url}>
        {menuItem.name}
      </StyledMenuLink>
    </StyledMenuElement>
  );

  render() {
    return (
        <StyledMenuOverlay>
          <span/><span/><span/><span/><span/>

          <StyledMenuContent>
            {this.renderMenuContent()}
          </StyledMenuContent>
        </StyledMenuOverlay>
    );
  }
}

export default MenuComponent;
