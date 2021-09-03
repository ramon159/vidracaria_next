import { COLOR } from 'config/general'
import styled from 'styled-components'
import { FaWhatsapp } from 'react-icons/fa'

export const WhatsappIcon = styled(FaWhatsapp)``

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  width: 3rem;
  height: 3rem;

  bottom: 3rem;
  right: 2rem;

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
