import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #242424;
    font-family: Red Hat Display;
    overflow: hidden;
  }

  #root {
    overflow: hidden;
  }

  *:focus-visible {
    outline: none;
  }
`;
