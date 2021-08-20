import React from 'react'
import PropTypes from 'prop-types'
const navItems = [
  {
    title: 'Início',
    url: '#'
  },
  {
    title: 'Produtos',
    url: '#products'
  },
  {
    title: 'Contato',
    url: '#contact'
  }
]
import { MenuItem, StyledLink } from './styles'

function NavItems(props) {
  return (
    <>
      {navItems.map((item) => (
        <MenuItem key={item.title}>
          <StyledLink
            key={item.url}
            smooth
            onClick={() => props.setShowMenu(false)}
            to={item.url}
          >
            {item.title}
          </StyledLink>
        </MenuItem>
      ))}
    </>
  )
}
NavItems.propTypes = {
  setShowMenu: PropTypes.func.isRequired
}

export default NavItems
