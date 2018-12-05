import styled from 'styled-components';
import * as RRD from 'react-router-dom';

import { Color } from 'styles';

export const Header = styled.header`
  background: ${Color.White};
  padding: 20px 0;
`;

export const LogoLink = styled(RRD.Link)`
  transition: all 300ms ease-in-out;

  &:hover{
    opacity: 0.7;
  }
  
  svg {
    width: 160px;
  }
`;

export const Navigation = styled.nav`
  display: inline-block;
  float: right;
`;

export const NavigationList = styled.ul`
  margin: 0;
  padding: 7px 20px;
`;
export const NavigationItem = styled.li`
  display: inline-block;
`;
export const NavigationLink = styled(RRD.Link)`
  color: ${Color.Black};
  font-weight: 700;
  padding: 0 20px;
  text-transform: uppercase;
  transition: 0.4s;
  
  &:hover {
    background-color: ${Color.LightGray};
    padding: 7px 20px;
  }
`;