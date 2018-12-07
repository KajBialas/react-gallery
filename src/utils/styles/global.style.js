import { injectGlobal, css } from 'styled-components';

//Variables
import { Color, FontSize, Screen } from './theme';

const MediumHtmlBodyStyle = css`
  width: 100%;
`;

injectGlobal`
  html, body {
    background: ${Color.LightGray};
    color: ${Color.Black};
    font-family: 'Montserrat', sans-serif;
    font-size: ${FontSize.M};
    padding: 0;
    margin: 0;
    
    ${Screen.medium(MediumHtmlBodyStyle)}
  }
  
  a {
    text-decoration: none;
  }
`;
