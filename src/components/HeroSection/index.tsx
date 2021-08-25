import * as S from './styles'
import Link from 'next/link'
import wppAPI from 'services/WppAPI'

const links = {
  phone: 'tel:+5502122222222',
  instagram: '#',
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
            <S.StyledButton>
              {/* variant="contained" */}
              <a>Produtos</a>
            </S.StyledButton>
          </Link>
          <S.IconWrapper>
            <Link href={links.phone}>
              <a target="_blank">
                <S.PhoneIcon />
              </a>
            </Link>

            <Link href={links.whatsapp} passHref={true}>
              <a target="_blank" rel="noreferrer">
                <S.WhatsappIcon />
              </a>
            </Link>

            <Link href={links.instagram}>
              <a target="_blank" rel="noreferrer">
                <S.InstagramIcon />
              </a>
            </Link>

            <Link href={links.facebook}>
              <a target="_blank" rel="noreferrer">
                <S.FacebookIcon />
              </a>
            </Link>
          </S.IconWrapper>
        </S.HeroText>
      </S.HeroImage>
    </S.Section>
  )
}

export default HeroSection
