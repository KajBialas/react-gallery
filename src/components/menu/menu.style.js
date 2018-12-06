import styled, { css, keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ifElse, prop, always } from 'ramda';

import { Color, FontSize } from 'styles';

const MenuOverlayDisplay = ifElse(
  prop('isOpened'),
  always('block'),
  always('none'),
);

const BackgroundAnimation = keyframes`
  0% { width: 0; }
  50% { width: 50%; }
  100% { width: 100%; }
`;

export const StyledMenuOverlay = styled.div`
  position: fixed;
  display: ${MenuOverlayDisplay};
  height: 100vh;
  width: 100vw;
  left:0;
  top:0;
  
  span {
    display: inline-block;
    position: relative;
    transition: width 10000ms ease-in-out;
    width: 20%;
    
    &:after {
      animation: ${BackgroundAnimation} 0.3s ease-in-out;
      background: ${Color.Black};
      content: '';
      display: block;
      float: right;
      height: 100vh;
      transition: width 500ms ease-in-out;
      width: 100%;
    }
  }
`;

export const StyledMenuContent = styled.ul`
    list-style-type: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    height: 100%;
    width: 700px;
    padding: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`;

export const StyledMenuElement = styled.li`

`;

const MenuItemAnimation = keyframes`
  0% { 
      margin-left: -2000px;
      opacity: 0; 
   }
  70% { 
      margin-left: -100px;
      opacity: 0;
    }
  90% {
      opacity: 0.3;
   }
  100% { 
      margin-left: 0;
      opacity: 1;
    }
`;

export const StyledMenuLink = styled(NavLink)`
  animation: ${MenuItemAnimation} ${props => 1.2 + props.elementCount / 7}s ease-in-out forwards;
  color: ${Color.White};
  font-size: ${FontSize.XL};
  width: 100%;
  display: block;
  padding: 27px 0;
  
  &:before{
    background-color: ${Color.White};
    content: '';
    width: 0;
    display: inline-block;
    height: 1px;
    margin: 0 10px 9px 0;
    transition: width 500ms ease-in-out;
  }
  
  &:hover {
    &:before {
      width: 100px;
    }
  }
  
`;
