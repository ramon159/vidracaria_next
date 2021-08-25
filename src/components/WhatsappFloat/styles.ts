import styled from 'styled-components'
// import { Button } from '@material-ui/core'
import { COLOR, SIZE } from 'config/general'
import { RiWhatsappFill as RiWhatsapp } from 'react-icons/ri'

// new

export const WhatsappIcon = styled(RiWhatsapp)`
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: black;
  color: #fff;
  border-radius: 50px;
  font-size: 30px;

  font-size: ${SIZE.p24}px;
  cursor: pointer;
  color: ${COLOR.white};
  /* sombra */
  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  /* box-shadow: 2px 2px 3px #999; */
`
export const WhatsAppWrapper = styled.div`
  position: fixed;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`
