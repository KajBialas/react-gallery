import styled, { css } from 'styled-components';

export const StyledImage = styled.div`
  
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  opacity: ${props => props.isVisible ? '1' : '0'};
  width: 100%;
  
  img {
  width: 100%;
  display: block;
  }
`;
