import React from 'react'
import Head from 'next/head'

import Nav from './Nav'
import Footer from './Footer'

import styles from '../styles/components/Layout.module.scss'

export default function Layout(props) {
  return (
    <> 
    <Head>
      <title>{props.title || 'Travis Cole - Web Development'}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.grid}>
      <header>
        <Nav />
      </header>
      <main>
        <div className={styles.container}>
          {props.children}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
  )
}