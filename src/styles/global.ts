import { createGlobalStyle } from 'styled-components'
import { FONT, SIZE, COLOR } from 'config/general'

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

  /* Swiper */

  .swiper-container {
  width: 100%;
  height: 150%;

}

.swiper-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

  @media (min-width: 768px) {
  .swiper-button-prev, .swiper-button-next{
  background-color: ${COLOR.tertiary};
  padding: 30px;
  color: ${COLOR.white};

  }

}
  .negativeindex{
    z-index: -1;
  }

`
