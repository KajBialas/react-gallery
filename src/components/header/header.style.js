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
  transition: .25s ease-in-out;
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

