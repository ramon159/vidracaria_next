import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as S from './styles'

const Header = ({
  navItems = [
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
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <S.Header>
      <S.Nav>
        {/* ====== Logo ====== */}
        <S.NavLogo href="/">
          <Image width="32" height="32" src="/img/logo.svg" alt="logo" />
        </S.NavLogo>
        {/* ====== List ====== */}
        <S.NavMenu isOpen={showMenu}>
          <S.MenuList>
            {navItems.map((item) => (
              <S.MenuItem key={item.title}>
                <Link href={item.url}>
                  <S.StyledLink
                    key={item.url}
                    onClick={() => setShowMenu(false)}
                  >
                    {item.title}
                  </S.StyledLink>
                </Link>
              </S.MenuItem>
            ))}
          </S.MenuList>

          <S.NavClose onClick={() => setShowMenu(false)} />
        </S.NavMenu>
        {/* ====== Cart ====== */}
        <S.NavWrapper>
          {/* ====== Hamburguer Menu ====== */}
          <S.Cart />
          <S.NavToggle onClick={() => setShowMenu(true)}>
            <S.Bars />
          </S.NavToggle>
        </S.NavWrapper>
      </S.Nav>
    </S.Header>
  )
}

export default Header
