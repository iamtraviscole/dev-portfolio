import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link 
            // 'By default, Next.js will automatically inline font CSS at build time...'
            // https://nextjs.org/docs/basic-features/font-optimization
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Poppins:wght@700'
            rel='stylesheet'
          />
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