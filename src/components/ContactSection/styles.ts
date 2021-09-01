import styled from 'styled-components'
import { COLOR } from 'config/general'

export const Map = styled.div``

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

export const Container = styled.div`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
