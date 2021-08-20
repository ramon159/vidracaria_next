import styled from 'styled-components'
// import { Button } from '@material-ui/core'
import { COLOR, FONT, SIZE } from 'config/general'
import {
  RiInstagramFill as RiInstagram,
  RiWhatsappFill as RiWhatsapp,
  RiPhoneFill as RiPhone
} from 'react-icons/ri'

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
  }
  p {
    color: ${COLOR.white};
    font-weight: 700;
  }
`

// export const StyledLink = styled(Link)`
//   margin: auto;
//   margin-top: 30px;
//   padding: 5px 5px;
//   background-color: #fa5f5f;
//   color: white;
//   /* border-radius: 15px; */
//   width: 50%;
//   transition: 0.1s;

//   &:hover {
//     background-color: #d64f4f;
//   }
// `;

export const StyledButton = styled.button`
  margin: auto;
  margin-top: 30px;
  padding: 5px 5px;
  background-color: ${COLOR.secondary};
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  border-radius: 3px;
  width: 50%;
  transition: 0.1s;
  height: 40px;
  &:hover {
    background-color: ${COLOR.secondaryLight};
  }
`
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 60px;
  gap: 7vw;
`
export const WhatsappIcon = styled(RiWhatsapp)`
  cursor: pointer;
  font-size: ${SIZE.p32}px;
`
export const InstagramIcon = styled(RiInstagram)`
  font-size: ${SIZE.p32}px;
  cursor: pointer;
`
export const PhoneIcon = styled(RiPhone)`
  font-size: ${SIZE.p32}px;
  cursor: pointer;
`
