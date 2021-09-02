import styled, { css } from 'styled-components'
import { COLOR, SIZE } from 'config/general'
import {
  RiWhatsappFill as RiWhatsapp,
  RiPhoneFill as RiPhone,
  RiFacebookFill as RiFacebook
} from 'react-icons/ri'

// const sharedShadow = css`
//   -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
//   filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
// `
const sharedIcon = css`
  font-size: ${SIZE.p24}px;
  cursor: pointer;
  color: ${COLOR.black};
`

export const Section = styled.div`
  background-color: ${COLOR.white};
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  align-items: center;
  padding: 1rem;

  h2 {
    font-size: 1.7em;
    margin: 2rem 0 3.5rem;
  }
`
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const ContactList = styled.ul``
export const ListItem = styled.li`
  padding: 30px;
  a {
    cursor: pointer;

    p {
      color: ${COLOR.black};
      font-size: ${SIZE.p18}px;
    }
  }
`

export const Map = styled.div``
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

// ICONS
export const WhatsappIcon = styled(RiWhatsapp)`
  ${sharedIcon};
  color: ${COLOR.wpp};
`
export const PhoneIcon = styled(RiPhone)`
  ${sharedIcon};
  color: ${COLOR.primary};
`

export const FacebookIcon = styled(RiFacebook)`
  ${sharedIcon};
  color: ${COLOR.fb};
`
