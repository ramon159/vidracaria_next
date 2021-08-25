import Link from 'next/link'
import * as S from './styles'

import wppAPI from 'services/WppAPI'

export default function WhatsappFloat() {
  const linkWhatsApp = wppAPI()
  return (
    <>
      <S.WhatsAppWrapper>
        <Link href={linkWhatsApp} passHref={true}>
          <a target="_blank" rel="noreferrer">
            <S.WhatsappIcon />
          </a>
        </Link>
      </S.WhatsAppWrapper>
    </>
  )
}
