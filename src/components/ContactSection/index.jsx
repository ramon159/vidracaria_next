// import * as S from './styles';
import Section from '../Section'
const items = [
  {
    phone: '(21) 2701-2327'
  }
]

function ContactSection() {
  return (
    <Section bg id="contact">
      <h1>{items.title}</h1>
      <ul>
        <li>Telefone: {items.phone}</li>
      </ul>
      <iframe
        title="embedMap"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16511.01158531947!2d-43.00155523905935!3d-22.824323674144367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa3f7435c4f4c636!2sVidra%C3%A7aria%20Central!5e0!3m2!1spt-BR!2sbr!4v1626913918903!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0, width: '60vw', height: '65vh' }}
        allowFullScreen=""
        loading="lazy"
      />
    </Section>
  )
}

export default ContactSection
