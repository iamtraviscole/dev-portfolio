import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

import FolderIcon from '../public/icons/folder_open.svg'
import ExternalLinkIcon from '../public/icons/external_link.svg'
import GithubIcon from '../public/icons/github.svg'
import WeatherghostLogo from '../public/weatherghost_logo.svg'

import weatherghostScreenshot from '../public/weatherghost_screenshot.png'

export default function Projects() {
  return (
    <Layout
      title='Projects'
      description=''
    >
      <PageHeader heading='Projects' icon={<FolderIcon />} />
      <div className='Projects'>
        <section className='Projects__project'>
          <div className='Projects__project-inner-ctr'>
            <div className='Projects__project-details'>
              <div className='Projects__project-details-logo'>
                <WeatherghostLogo />
              </div>
              <div className='Projects__project-details-description'>
                <p>A weather app with fun ghost illustrations. Search for current, hourly, and future weather conditions at any location in the world.</p>
              </div>
              <div className='Projects__project-details-links'>
                <div className='Projects__project-details-links-link'>
                  <Link href='http://weatherghost.com'><a target='_blank'><ExternalLinkIcon />View Live</a></Link>
                </div>
                <div className='Projects__project-details-links-link'>
                  {/* TODO: add github link */}
                  <Link href='http://github.com'><a target='_blank'><GithubIcon />Github</a></Link>
                </div>
              </div>
              <div className='Projects__project-details-tech'>
                <h3>Technologies</h3>
                <ul>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>HTML</li>
                  <li>Sass</li>
                  <li>Web APIs</li>
                </ul>
              </div>
            </div>
            <div className='Projects__project-ss'>
              <Image src={weatherghostScreenshot} alt='weatherghost screenshot' width={1440} height={1200} />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}