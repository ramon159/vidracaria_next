import { createGlobalStyle } from 'styled-components'
import { FONT } from 'config/general'

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      line-height: 1.5;
  }

  html, body, #root, .App {
      height: 100%;
      box-sizing: border-box;
  }

  html {
      scroll-behavior: smooth;
  }

  body{
      font-family: ${FONT.body};
  }

  a {
      text-decoration: none ;
      cursor: pointer;
  }

  ul {
      list-style-type: none;
  }

  button {
      cursor: pointer;
  }
`
