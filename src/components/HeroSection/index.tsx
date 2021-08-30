import * as S from './styles'
import Link from 'next/link'
import wppAPI from 'services/WppAPI'

const links = {
  phone: 'tel:+5502127012327',
  // instagram: '#',
  whatsapp: wppAPI(),
  facebook: 'https://www.facebook.com/vidracariacentralrj'
}

function HeroSection() {
  return (
    <S.Section>
      <S.HeroImage>
        <S.HeroText>
          <h1>Vidraçaria Central</h1>
          <p>Os melhores produtos e serviços à sua disposição</p>
          <Link href="#products">
            <S.StyledButton>Produtos</S.StyledButton>
          </Link>
          <S.IconWrapper>
            <Link href={links.phone} passHref={true}>
              <S.StyledLink rel="noreferrer">
                <S.PhoneIcon />
                <p>telefone</p>
              </S.StyledLink>
            </Link>

            <Link href={links.whatsapp} passHref={true}>
              <S.StyledLink target="_blank" rel="noreferrer">
                <S.WhatsappIcon />
                <p>whatsapp</p>
              </S.StyledLink>
            </Link>

            <Link href={links.facebook} passHref={true}>
              <S.StyledLink target="_blank" rel="noreferrer">
                <S.FacebookIcon />
                <p>facebook</p>
              </S.StyledLink>
            </Link>
          </S.IconWrapper>
        </S.HeroText>
      </S.HeroImage>
    </S.Section>
  )
}

export default HeroSection
