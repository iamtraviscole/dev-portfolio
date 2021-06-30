import React from 'react'
import Link from 'next/link'
import styles from '../styles/components/Nav.module.scss'

export default function Nav() {
  return (
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/"><a>&gt; travis cole</a></Link>
        </div>
        <ul>
          <li><Link href="/skills"><a>Skills</a></Link></li>
          <li><Link href="/projects"><a>Projects</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
  )
}

