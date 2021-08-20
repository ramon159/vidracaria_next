import styled from 'styled-components'
import { NavHashLink as Link } from 'react-router-hash-link'
import { COLOR, FONT } from '../../../config/general.ts'

export const MenuItem = styled.li``

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;

  ${FONT.poppins}

  color: ${COLOR.black};
  @media (min-width: 768px) {
    color: black;
    text-transform: initial;
  }
  font-weight: ${FONT.WEIGHT.semiBold};
  text-transform: uppercase;

  &:hover {
    color: tomato;
  }
  &:after {
    content: '';
    position: absolute;
    height: 3px;
    background-color: tomato;
    height: 3px;
    width: 0;
    bottom: 0;
    left: 50%;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }
  &:hover:after,
  &:focus:after {
    width: 100%;
    left: 0;
  }
`
