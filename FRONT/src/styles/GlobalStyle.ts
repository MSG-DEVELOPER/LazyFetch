// styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #1F1F1F; /* fondo primario */
    color: #E5E5E5; /* texto claro */
    font-family: 'IBM Plex Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
    margin: 0;
  }

  button, input, textarea {
    font-family: inherit;
  }
`;
