import { createGlobalStyle } from 'styled-components'
import { FONT, SIZE } from 'config/general'

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      line-height: 1.5;
  }

  html {
      scroll-behavior: smooth;
  }

  html, body, #root, .App {
      height: 100%;
      box-sizing: border-box;
  }

  body{
      font-family: ${FONT.body};
      font-size: ${SIZE.normal};
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

  button, input {
      border: none;
      font-family: ${FONT.body};
  }
`
