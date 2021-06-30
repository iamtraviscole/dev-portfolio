import React from 'react'

import styles from '../styles/components/Layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.grid}>
      <header>
        header
      </header>
      <main>
        content
        {children}
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}