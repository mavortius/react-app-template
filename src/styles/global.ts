import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.main};
    font-family: 'Open Sans', helvetica, sans-serif;
    font-size: 1.4rem;
    text-rendering: optimizeLegibility;
  }
`;
