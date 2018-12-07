import styled, { css, keyframes} from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Color, FontSize, Screen } from 'styles';

const BackgroundAnimation = keyframes`
  0% { width: 0; }
  50% { width: 50%; }
  100% { width: 100%; }
`;

export const StyledMenuOverlay = styled.div`
  display: block;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;

  span {
    display: inline-block;
    position: relative;
    width: 20%;
    
    &:after {
      animation: ${BackgroundAnimation} 0.3s ease-in-out;
      background: ${Color.Black};
      content: '';
      display: block;
      float: right;
      height: 100vh;
      width: 100%;
    }
  }
`;

const MediumMenuContentStyle = css`
  width: 100%;
`;

export const StyledMenuContent = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    left: 0;
    list-style-type: none;
    margin: auto;
    position: absolute;
    top: 0;
    overflow: hidden;
    padding: 0;
    right: 0;
    width: 700px;
    z-index: 3;
    
    ${Screen.medium(MediumMenuContentStyle)}
`;

export const StyledMenuElement = styled.li``;

const MediumMenuLinkStyle = css`
  padding: 27px 40px;
`;

const MenuLinkAnimation = keyframes`
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
  animation: ${MenuLinkAnimation} ${props => 1.2 + props.count / 7}s ease-in-out forwards;
  box-sizing: border-box;
  color: ${Color.White};
  display: block;
  font-size: ${FontSize.XL};
  padding: 27px 0;
  width: 100%;
  
  ${Screen.medium(MediumMenuLinkStyle)}
  
  &:before{
    background-color: ${Color.White};
    content: '';
    display: inline-block;
    height: 1px;
    margin: 0 10px 9px 0;
    transition: width 500ms ease-in-out;
    width: 0;
  }
  
  &:hover {
  
    &:before {
      width: 100px;
    }
  }
`;
