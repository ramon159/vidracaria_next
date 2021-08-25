import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vidraçaria Central</title>
        <link rel="shortcut icon" href="/img/logo.svg" />
        <link rel="apple-touch-icon" href="/img/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Janelas, Portas, Box, Guarda corpo, Kit pia e Espelhos bisotados"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
