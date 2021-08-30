import { COLOR } from 'config/general'
import styled from 'styled-components'
import { FaWhatsapp } from 'react-icons/fa'

export const WhatsappIcon = styled(FaWhatsapp)`
  margin-top: 16px;
`

export const StyledLink = styled.a`
  z-index: 100;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;

  background-color: ${COLOR.wpp};
  color: ${COLOR.white};

  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #222;
  p {
    position: fixed;
    right: -100%;
    color: ${COLOR.black};
  }
`
