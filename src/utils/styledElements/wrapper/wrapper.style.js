import styled, {css} from 'styled-components';

//Variables
import { Screen } from 'styles';

const MediumWrapperStyle = css`
  width: 100%;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 1180px;
  
  ${Screen.medium(MediumWrapperStyle)}
`;