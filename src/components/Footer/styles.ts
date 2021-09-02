import styled from 'styled-components'
import { COLOR } from 'config/general'

export const Footer = styled.footer`
  height: 100px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  color: ${COLOR.white};
  background-color: ${COLOR.primary};

  padding: 0 1rem;

  p {
    white-space: pre;
    font-size: 12px;
  }

  a {
    font-size: 12px;
    color: ${COLOR.white};
    background-color: ${COLOR.primary};
    text-decoration: underline;
  }
`
