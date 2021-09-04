import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { RiCloseLine, RiShoppingCart2Fill as CartIcon } from 'react-icons/ri'
import { COLOR, SIZE, FONT } from 'config/general'

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${COLOR.white};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
`

export const Nav = styled.nav`
  height: ${SIZE.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;

  @media (min-width: 768px) {
    height: calc(${SIZE.headerHeight} + 1rem);
  }
`

export const NavLogo = styled.a`
  color: ${COLOR.white};
  font-weight: ${FONT.WEIGHT.semiBold};
`
export const NavWrapper = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 20px;
`
type INavMenuProps = {
  isOpen: boolean
}

export const NavMenu = styled.div<INavMenuProps>`
  position: relative;

  @media (max-width: 767px) {
    position: fixed;
    background-color: ${COLOR.body};
    top: 0;
    right: ${(props) => (props.isOpen ? '0' : '-100%')};
    width: 75vw;
    height: 200%;
    box-shadow: -1px 0 4px hsla(190, 64%, 15%, 0.15);
    padding: 3rem;
    transition: 0.4s;
  }
  @media (min-width: 768px) {
    display: flex;
    column-gap: 1rem;
  }
`

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 4rem;
  }
`

export const NavClose = styled(RiCloseLine)`
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  font-size: 1.5rem;
  color: ${COLOR.title};
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

export const NavToggle = styled.div`
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Bars = styled(FaBars)`
  color: ${COLOR.black};
`
export const Cart = styled(CartIcon)`
  color: ${COLOR.white};
  font-size: 1.5rem;
  cursor: pointer;

  /* temporary */
`
// navItems

export const MenuItem = styled.li``

export const StyledLink = styled.a`
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
