import styled from 'styled-components'
import ISection from '../Section'

export const Section = styled(ISection)`
  background-color: #eee;
  min-height: 100vh;
`
// const bg = {
//   black: 'background-color: black; color: white',
//   white: 'background-color: #eee; color: black'
// }

export const Container = styled.div`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Map = styled.iframe`
  width: 65vh;
  height: 60vw;
  border: 0;
`
