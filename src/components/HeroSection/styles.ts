import styled, { css } from 'styled-components'
import { COLOR, FONT, SIZE } from 'config/general'
import {
  RiInstagramFill as RiInstagram,
  RiWhatsappFill as RiWhatsapp,
  RiPhoneFill as RiPhone
} from 'react-icons/ri'

const sharedShadow = css`
  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
`
const sharedIcon = css`
  font-size: ${SIZE.p24}px;
  cursor: pointer;
  color: ${COLOR.white};
`
export const Section = styled.section`
  height: 100vh;
`

export const HeroImage = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.5)
    ),
    url('/img/hero-image.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-attachment: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroText = styled.div`
  color: ${COLOR.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 24px;
  h1 {
    color: ${COLOR.tertiary};
    font-family: ${FONT.heroTitle};
    font-weight: 700;
    font-size: 2.5em;
    margin: 0.67em 0;
    ${sharedShadow}
  }
  p {
    color: ${COLOR.white};
    font-weight: 700;

    ${sharedShadow}
  }
`

export const StyledLink = styled.a`
  color: ${COLOR.white};
`

export const StyledButton = styled.button`
  margin: auto;
  margin-top: 70px;
  padding: 5px 5px;
  background-color: ${COLOR.secondary};
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  border-radius: 3px;
  width: 50%;
  transition: 0.1s;
  height: 40px;
  ${sharedShadow}
  &:hover {
    background-color: ${COLOR.secondaryLight};
  }
`
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 70px;
  gap: 60px;

  @media (min-width: 768px) {
  } ;
`

// ICONS
export const WhatsappIcon = styled(RiWhatsapp)`
  ${sharedIcon}
  ${sharedShadow}
`
export const InstagramIcon = styled(RiInstagram)`
  ${sharedShadow}
  ${sharedIcon}
`
export const PhoneIcon = styled(RiPhone)`
  ${sharedShadow}
  ${sharedIcon}
`
