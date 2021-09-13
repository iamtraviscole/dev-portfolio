import '../styles/globals/reset.scss'
import '../styles/globals/theme.scss'

import '../styles/pages/Index.scss'
import '../styles/pages/Skillset.scss'
import '../styles/pages/About.scss'

import '../styles/components/Nav.scss'
import '../styles/components/PageHeader.scss'
import '../styles/components/Layout.scss'
import '../styles/components/Footer.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
