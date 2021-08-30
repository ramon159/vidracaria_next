import styled from 'styled-components'
import { COLOR, FONT, SIZE } from 'config/general'
import { RiWhatsappFill as RiWhatsapp } from 'react-icons/ri'

export const Section = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 1rem;

  h2 {
    font-size: 1.7em;
    margin: 2rem 0 4rem;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;

  img {
  }
  p {
    ${FONT.poppins};
    color: ${COLOR.primary};
    text-align: center;
    margin-left: 5px;
  }
`

export const CardButton = styled.button`
  color: ${COLOR.white};
  background-color: ${COLOR.primary};
  padding: 1rem;
  transition: 0.2s;
  &:hover {
    background-color: ${COLOR.tertiary};
  }
`
export const WppIcon = styled(RiWhatsapp)`
  font-size: ${SIZE.p16}px;
  float: right;
`
