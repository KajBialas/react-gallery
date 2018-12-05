import styled from 'styled-components';
import * as RRD from 'react-router-dom';

import { Color } from 'styles';

export const Description = styled.div`
  margin: 135px 0;
  text-align: center;
  
  span {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const TaskLink = styled(RRD.Link)`
  background: ${Color.Green};
  border-bottom: 2px solid ${Color.DarkGreen};
  border-radius: 5px;
  color: ${Color.White};
  display: block;
  font-weight: bold;
  line-height: 45px;
  margin: 0 auto;
  padding-top: 5px;
  text-align: center;
  text-transform: uppercase;
  transition: all 300ms ease-in-out;
  width: 350px;

  &:hover{
    background: ${Color.DarkGreen};
  }
  
  svg {
    width: 30px;
    height: 15px;
    fill: #fff;
  }
`;