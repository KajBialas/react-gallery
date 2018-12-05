import { injectGlobal } from 'styled-components';

//Variables
import { Color } from './theme';

injectGlobal`
  html, body {
    background: ${Color.LightGray};
    color: ${Color.Black};
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }
`;
