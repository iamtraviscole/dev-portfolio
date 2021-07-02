import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
      <nav className='Nav'>
        <div className='Nav__logo'>
          <Link href='/'><a>&gt; travis cole</a></Link>
        </div>
        <ul className='Nav__links'>
          <li><Link href='/skills'><a>Skills</a></Link></li>
          <li><Link href='/projects'><a>Projects</a></Link></li>
          <li><Link href='/about'><a>About</a></Link></li>
          <li><Link href='/contact'><a>Contact</a></Link></li>
        </ul>
      </nav>
  )
}

