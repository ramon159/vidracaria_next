import styled from 'styled-components'

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
`

export const Map = styled.iframe`
  width: 90vh;
  height: 90vw;
`
