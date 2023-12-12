import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    user-select: none;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #242424;
    font-family: Red Hat Display;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 6px; /* Largura da barra de rolagem */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #888; /* Cor da alça da barra de rolagem */
      border-radius: 3px; /* Raio da alça da barra de rolagem */
    }
    
    &::-moz-scrollbar {
      width: 6px; /* Largura da barra de rolagem */
    }
    &::-moz-scrollbar-thumb {
      background-color: #888; /* Cor da alça da barra de rolagem */
      border-radius: 3px; /* Raio da alça da barra de rolagem */
    }
  }

  #root {
    overflow: hidden;
  }

  *:focus-visible {
    outline: none;
  }
  
  a {
    text-decoration: none;
  }
`;
