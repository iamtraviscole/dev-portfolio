import Document, { Html, Head, Main, NextScript } from 'next/document'

const themeInitializerScript = `
  (function () {
    document.documentElement.setAttribute('data-theme', window.localStorage.getItem("theme") || "light")
  })()
`

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
        </Head>
        <body>
          {/* blocks rest of app from rendering until themeInitializerScript is finished to prevent theme flicker */}
          <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument