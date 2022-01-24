import Head from 'next/head'
import PropTypes from 'prop-types'

import Nav from './Nav'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <> 
    <Head>
      <title>{props.title ? `${props.title} | Travis Cole` : 'Travis Cole'}</title>
      <meta name='description' content={props.description} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <div className='Layout'>
      <header className='Layout__header'>
        <Nav />
      </header>
      <main className='Layout__main'>
        <div className='Layout__main-ctr'>
          {props.children}
        </div>
      </main>
      <footer className='Layout__footer'>
        <Footer />
      </footer>
    </div>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  descripton: PropTypes.string
}