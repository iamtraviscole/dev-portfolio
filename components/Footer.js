import React from 'react'
import Link from 'next/link'

import GithubIcon from '../public/icons/github.svg'
import TwitterIcon from '../public/icons/twitter.svg'

export default function Footer() {
  return (
    <div className='Footer'>
      <ul>
        <li>&copy; 2022 Travis Cole</li>
        {/* TODO: add links */}
        <li><Link href='http://github.com'><a target='_blank'><GithubIcon /></a></Link></li>
        <li><Link href='http://twitter.com'><a target='_blank'><TwitterIcon /></a></Link></li>
      </ul>
    </div>
  )
}
