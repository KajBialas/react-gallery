import { injectGlobal } from 'styled-components';

//Variables
import { Color, FontSize } from './theme';

injectGlobal`
  html, body {
    background: ${Color.LightGray};
    color: ${Color.Black};
    font-family: 'Montserrat', sans-serif;
    font-size: ${FontSize.M};
    padding: 0;
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }
`;
