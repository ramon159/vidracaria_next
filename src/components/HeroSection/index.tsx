import * as S from './styles'
import Link from 'next/link'
import wppAPI from 'services/WppAPI'

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
            <Link href="#">
              <a target="_blank">
                <S.PhoneIcon />
              </a>
            </Link>

            <Link href={wppAPI()} passHref={true}>
              <a target="_blank" rel="noreferrer">
                <S.WhatsappIcon />
              </a>
            </Link>

            <Link href="21-2701-2327">
              <a target="_blank" rel="noreferrer">
                <S.InstagramIcon />
              </a>
            </Link>
          </S.IconWrapper>
        </S.HeroText>
      </S.HeroImage>
    </S.Section>
  )
}

export default HeroSection
