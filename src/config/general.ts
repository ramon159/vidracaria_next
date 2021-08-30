export interface IColorsProps {
  wpp: string
  primary: string
  secondary: string
  secondaryLight: string
  tertiary: string
  quartenary: string
  title: string
  text: string
  textColorLight: string
  input: string
  body: string
  white: string
  black: string
  scrollBarColor: string
  ScrollThumbColor: string
}

export const COLOR: IColorsProps = {
  wpp: '#01e675',
  primary: 'hsl(190, 64%, 22%)',
  secondary: '#F24236',
  secondaryLight: 'hsl(4, 88%, 63%)',
  tertiary: '#34D1BF',
  quartenary: '#D1345B',
  white: '#FFFFFF',
  black: '#111',
  title: 'hsl(190, 64%, 18%)',
  text: 'hsl(190, 24%, 35%)',
  textColorLight: 'hsl(190, 8%, 60%)',
  input: 'hsl(190, 24%, 97%)',
  body: 'hsl(190, 100%, 99%)',
  scrollBarColor: 'hsl(190, 12%, 90%)',
  ScrollThumbColor: 'hsl(190, 12%, 75%)'
}

export interface ISizesProps {
  p: string
  p16: string
  p15: string
  p13: string
  p12: string
  p18: string
  p20: string
  p28: string
  p24: string
  p32: string
  h1: string
  h2: string
  h3: string
  headerHeight: string

  small: string
  smaller: string
  normal: string
  big: string
}
export const SIZE: ISizesProps = {
  p: '14',
  p13: '13',
  p12: '12',
  p15: '15',
  p16: '16',
  p18: '18',
  p20: '20',
  p24: '24',
  p28: '28',
  p32: '32',
  h1: '1.5rem',
  h2: '1.25rem',
  h3: '1rem',
  headerHeight: '3.5rem',
  smaller: '.75rem',
  small: '.813rem',
  normal: '.938rem',
  big: '2.5rem'
}

export interface IFontProps {
  WEIGHT: {
    medium: string
    semiBold: string
  }
  body: string
  title: string
  heroTitle: string
  poppins: string
  inter: string
}

export const FONT: IFontProps = {
  WEIGHT: {
    medium: '500',
    semiBold: '600'
  },
  body: "'Inter',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
  title: "'Ralewar', sans-serif",
  heroTitle: "'Inter', sans-serif",
  poppins: "font-family: 'Poppins',sans-serif;",
  inter: "font-family: 'Inter',sans-serif;"
}

export interface IImg {
  transition: string
  hidden: string
  scale: string
}
export const IMG: IImg = {
  transition: '.3s',
  hidden: 'hidden',
  scale: 'scale(1.1)'
}
