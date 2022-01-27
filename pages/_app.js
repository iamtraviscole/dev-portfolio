import Head from 'next/head'

import '../styles/globals/reset.scss'
import '../styles/globals/theme.scss'

import '../styles/pages/Index.scss'
import '../styles/pages/Skillset.scss'
import '../styles/pages/Projects.scss'
import '../styles/pages/About.scss'

import '../styles/components/Nav.scss'
import '../styles/components/NavModal.scss'
import '../styles/components/PageHeader.scss'
import '../styles/components/Layout.scss'
import '../styles/components/Footer.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name='viewport' content='width=device-width initial-scale=1' />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
