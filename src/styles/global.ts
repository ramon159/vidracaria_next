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
  height: 100%;

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
.swiper-button-prev, .swiper-button-next{
  background-color: ${COLOR.tertiary};
  padding: 30px;
  color: ${COLOR.white};
}

/* @media only screen and (min-width: 769px) {
  .swiper-slide:first-child {
    transition: transform 100ms;
  }

  .swiper-slide:first-child img {
    transition: box-shadow 500ms;
  }

  .swiper-slide.swiper-slide-active:first-child {
    transform: translateX(50%);
    z-index: 2;
  }

  .swiper-slide.swiper-slide-active:first-child img {
    box-shadow: 0px 32px 80px rgba(0, 0, 0, 0.35);
  }

  .swiper-slide:nth-child(2) {
    transition: transform 100ms;
  }

  .swiper-slide.swiper-slide-next:nth-child(2) {
    transform: translateX(55%);
    z-index: 1;
  }

  .swiper-container[dir="rtl"] .swiper-slide.swiper-slide-active:first-child {
    transform: translateX(-50%);
  }

  .swiper-container[dir="rtl"] .swiper-slide.swiper-slide-next:nth-child(2) {
    transform: translateX(-55%);
  }
} */


`
