import Section from '../Section'
import * as S from './styles'
import Image from 'next/image'
import SwiperCore, { Keyboard, Navigation, Pagination } from 'swiper/core'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

SwiperCore.use([Keyboard, Navigation, Pagination])

const imageItems = [
  {
    img: '/img/janelas.jpg',
    title: 'janelas'
  },
  {
    img: '/img/portas.jpg',
    title: 'portas'
  },
  {
    img: '/img/box.jpg',
    title: 'box'
  },
  {
    img: '/img/guarda_corpo.jpg',
    title: 'guarda corpo'
  },
  {
    img: '/img/kit_pia.jpg',
    title: 'kit pia'
  },
  {
    img: '/img/espelho_bisotado.jpg',
    title: 'espelho bisotado'
  }
]

const settings = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spacebetween: 10,
  centeredSlides: false,
  grabCursor: false,
  keyboard: {
    enabled: true
  },
  breakpoints: {
    '340': {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    '768': {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    '1024': {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  },
  navigation: true,
  pagination: {
    clickable: true
  },
  className: 'mySwiper'
}

function index() {
  return (
    <Section id="products">
      <h2>Produtos</h2>
      <Swiper {...settings}>
        {imageItems.map((i) => (
          <SwiperSlide key={i.title}>
            <S.Card>
              <Image
                width="300"
                height="300"
                src={i.img}
                alt={'img/' + i.title}
              />
              <p>{i.title}</p>
            </S.Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  )
}

export default index
