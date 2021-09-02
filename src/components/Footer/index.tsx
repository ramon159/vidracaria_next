import * as S from './styles'

function index() {
  const newDate = new Date()
  const currentYear = newDate.getFullYear()

  const text = `Copyright © ${currentYear} Vidraçaria Central, Desenvolvido por:`

  return (
    <S.Footer>
      <p>{text}</p>
      <a
        href="https://www.linkedin.com/in/ramon-arthur-826a271a1/"
        target="_blank"
        rel="noreferrer"
      >
        <div>Ramon Arthur</div>
      </a>
    </S.Footer>
  )
}

export default index
