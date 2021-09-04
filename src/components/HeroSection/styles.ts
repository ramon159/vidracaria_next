import styled from 'styled-components'
import { COLOR, FONT } from 'config/general'

export const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeroImage = styled.div`
  z-index: -1;
`
export const BackgroundShadow = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.5)
  );

  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  bottom: 0;
`

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  z-index: 3;
  color: ${COLOR.white};
  font-size: 1.3rem;
  h1 {
    color: ${COLOR.tertiary};
    font-family: ${FONT.heroTitle};
    font-weight: 700;
    font-size: 2.5em;
    margin: 0.67em 0;
  }
  p {
    color: ${COLOR.white};
    font-weight: 700;
  }
`

export const StyledLink = styled.a`
  color: ${COLOR.white};
  p {
    color: ${COLOR.black};
    position: fixed;
    right: -100%;
    z-index: 10;
    font-size: 24px;
  }
`

export const StyledButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  text-align: center;
  color: ${COLOR.white};
  background-color: ${COLOR.secondary};

  margin: auto;
  margin-top: 2rem;
  padding: 5px 5px;
  border-radius: 3px;

  width: 50%;
  height: 40px;
  transition: 0.1s;
  &:hover {
    background-color: ${COLOR.secondaryLight};
  }
`
