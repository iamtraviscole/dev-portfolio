import Link from 'next/link'

import GithubIcon from '../public/icons/github.svg'
import TwitterIcon from '../public/icons/twitter.svg'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className='Footer'>
      <div className='Footer__socials'>
        <ul>
          {/* TODO: add links */}
          <li><Link href='http://github.com'><a target='_blank'><GithubIcon /></a></Link></li>
          <li><Link href='http://twitter.com'><a target='_blank'><TwitterIcon /></a></Link></li>
        </ul>
      </div>
      <div className='Footer__copyright'>
        <p>&copy; {year} Travis Cole</p>
      </div>
    </div>
  )
}
