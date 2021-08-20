import styled from 'styled-components'
import { COLOR, FONT } from 'config/general'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

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
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  img {
  }
  h3 {
    ${FONT.poppins}
    color: ${COLOR.primary}
  }
`
