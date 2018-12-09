import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { ifElse, prop, always } from 'ramda';

import { Color } from 'styles';

export const Header = styled.header`
  background: ${Color.White};
  padding: 20px 0;
  position: relative;
  z-index: 2;
`;

export const LogoLink = styled(Link)`
  display: inline-block;
  font-size: 0;
  margin: 17px 10px;
  
  svg {
    width: 160px;
  }
`;

const HamburgerButtonOpenedStyle = css`
  &:nth-child(1) {
      left: 8px;
      top: -3px;
      transform: rotate(45deg);
    }
    
    &:nth-child(2) {
      opacity: 0;
      width: 0;
    }
    
    &:nth-child(3) {
      left: 8px;
      top: 18px;
      transform: rotate(-45deg);
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
    background: ${HamburgerButtonBackground};
    border-radius: 2px;
    display: block;
    height: 3px;
    left: 0;
    opacity: 1;
    position: absolute;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    width: 100%;

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