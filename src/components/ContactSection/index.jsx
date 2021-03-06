import * as S from './styles'
import { useMobileStatic } from '../../hooks/useMobileStatic'
import Link from 'next/link'
import wppAPI from 'services/WppAPI'

const items = [
  {
    name: '(21) 2701-2327',
    link: 'tel:+5502127012327',
    icon: <S.PhoneIcon />
  },
  {
    name: '(21) 96474-3206',
    link: wppAPI(),
    icon: <S.WhatsappIcon />
  },
  {
    name: '@vidracariacentralrj',
    link: 'https://www.facebook.com/vidracariacentralrj',
    icon: <S.FacebookIcon />
  }
]

function ContactSection() {
  const { isMobile } = useMobileStatic()

  const styleMap = {
    border: 0,
    width: isMobile ? '90vw' : '60vw',
    height: '65vh',
    float: 'right'
  }
  return (
    <S.Section id="contact">
      <h2>Contato</h2>
      <S.Wrapper>
        <S.Map>
          <iframe
            title="embedMap"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16511.01158531947!2d-43.00155523905935!3d-22.824323674144367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa3f7435c4f4c636!2sVidra%C3%A7aria%20Central!5e0!3m2!1spt-BR!2sbr!4v1626913918903!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={styleMap}
            className="embedMap"
            allowFullScreen=""
            loading="lazy"
          />
          <div>
            R. Palmira Ninho, 15 - Alcantara, São Gonçalo - RJ, 24710-440
          </div>
        </S.Map>
        <S.ContactList>
          {items.map((item) => (
            <S.ListItem key={item.name}>
              <Link href={item.link}>
                <a target="_blank" rel="noreferrer">
                  {item.icon}
                  <p>{item.name}</p>
                </a>
              </Link>
            </S.ListItem>
          ))}
        </S.ContactList>
      </S.Wrapper>
    </S.Section>
  )
}

export default ContactSection
