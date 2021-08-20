import Section from '../Section'
import * as S from './styles'
const items = [
  {
    img: '/janelas.jpg',
    title: 'janelas'
  },
  {
    img: '/portas',
    title: 'portas'
  },
  {
    img: '/box.jpg',
    title: 'box'
  },
  {
    img: '/guarda_corpo',
    title: 'guarda corpo'
  },
  {
    img: '/kit_pia',
    title: 'kit pia'
  },
  {
    img: '/espelho_bisotado.jpg',
    title: 'espelho bisotado'
  }
]

function index() {
  return (
    <Section id="products">
      <h1>Produtos e Serviços</h1>
      <S.CardContainer>
        {items.map((i) => (
          <S.Card key={i.title}>
            <p>{i.title}</p>
          </S.Card>
        ))}
      </S.CardContainer>
    </Section>
  )
}

export default index
