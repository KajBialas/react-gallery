import styled, { css, keyframes } from 'styled-components';
import * as RRD from 'react-router-dom';

import { ifElse, prop, always } from 'ramda';

import { Color } from 'styles';

export const Header = styled.header`
  background: ${Color.White};
  padding: 20px 0;
`;

export const LogoLink = styled(RRD.Link)`
  display: inline-block;
  font-size: 0;
  margin: 17px 0;
  
  svg {
    width: 160px;
  }
`;

const HamburgerButtonOpenedStyle = css`
  &:nth-child(1) {
      transform: rotate(45deg);
      top: -3px;
      left: 8px;
    }
    
    &:nth-child(2) {
      width: 0;
      opacity: 0;
    }
    
    &:nth-child(3) {
      transform: rotate(-45deg);
      top: 18px;
      left: 8px;
    }
`;

const HamburgerButtonOpened = ifElse(
  prop('isOpened'),
  always(HamburgerButtonOpenedStyle),
  always(''),
);

const HamburgerButtonBackground = ifElse(
  prop('isOpened'),
  always(Color.White),
  always(Color.Black),
);

export const HamburgerButton = styled.div`
  cursor: pointer;
  float: right;
  height: 21px;
  margin: 14px 10px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  width: 30px;
  z-index: 2;
  
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${HamburgerButtonBackground};
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    &:nth-child(1) {
      top: 0;
      transform-origin: left center;
    }
    
    &:nth-child(2) {
      top: 9px;
      transform-origin: left center;
    }
    
    &:nth-child(3) {
      top: 18px;
      transform-origin: left center;
    }
    
    ${HamburgerButtonOpened}
  }
`;

const MenuOverlayDisplay = ifElse(
  prop('isOpened'),
  always('block'),
  always('none'),
);

const MenuColumWidth = ifElse(
  prop('isOpened'),
  always('100%'),
  always('0'),
);

const Animation = keyframes`
  0% { width: 0; }
  50% { width: 30% }
  100% { width: 100% }
`;

export const MenuOverlay = styled.div`
  position: fixed;
  display: ${MenuOverlayDisplay};
  height: 100vh;
  width: 100vw;
  left:0;
  top:0;
  
  span {
    transition: width 10000ms ease-in-out;
    display: inline-block;
    position: relative;
    width: 20%;
    &:after {
      background: ${Color.Black};
      content: '';
      display: block;
      float: right;
      height: 100vh;
      transition: width 500ms ease-in-out;
      width: 100%;
      animation: ${Animation} 0.5s linear;
    }
  }
`;
