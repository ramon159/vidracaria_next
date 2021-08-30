import Link from 'next/link'
import * as S from './styles'

import wppAPI from 'services/WppAPI'

export default function WhatsappFloat() {
  const linkWhatsApp = wppAPI('Olá, gostaria de fazer um orçamento')

  return (
    <>
      <Link href={linkWhatsApp} passHref={true}>
        <S.StyledLink target="_blank" rel="noreferrer">
          <S.WhatsappIcon />
          <p>Whatsapp</p>
        </S.StyledLink>
      </Link>
    </>
  )
}
