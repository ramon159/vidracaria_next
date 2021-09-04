import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'

function HeroSection() {
  return (
    <S.Section>
      <S.BackgroundShadow />
      <S.HeroImage>
        <Image
          layout={'fill'}
          objectFit={'cover'}
          src={'/img/hero-image.jpg'}
          alt={'hero-image'}
          priority={true}
        />
      </S.HeroImage>

      <S.HeroText>
        <h1>Vidraçaria Central</h1>
        <p>Os melhores produtos e serviços à sua disposição</p>
        <Link href="#products">
          <S.StyledButton>Produtos</S.StyledButton>
        </Link>
      </S.HeroText>
    </S.Section>
  )
}

export default HeroSection
