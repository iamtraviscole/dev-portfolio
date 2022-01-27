import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link 
            // 'By default, Next.js will automatically inline font CSS at build time...'
            // https://nextjs.org/docs/basic-features/font-optimization
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=Poppins:wght@700&family=VT323'
            rel='stylesheet'
          />
          <meta name='viewport' content='width=device-width initial-scale=1' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument