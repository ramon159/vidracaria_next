import * as S from './styles'
import Link from 'next/link'

function HeroSection() {
  return (
    <S.Section>
      <S.HeroImage>
        <S.HeroText>
          <h1>Vidraçaria Central</h1>
          <p>Os melhores produtos e serviços à sua disposição</p>
          <Link href="#">
            <S.StyledButton>
              {/* variant="contained" */}
              Produtos e Serviços
            </S.StyledButton>
          </Link>
          <S.IconWrapper>
            <Link href="#">
              <S.PhoneIcon />
            </Link>
            <Link href="#">
              <S.WhatsappIcon />
            </Link>
            <Link href="#">
              <S.InstagramIcon />
            </Link>
          </S.IconWrapper>
        </S.HeroText>
      </S.HeroImage>
    </S.Section>
  )
}

export default HeroSection
