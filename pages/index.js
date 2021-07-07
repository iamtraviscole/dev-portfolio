import React from 'react'

import Layout from '../components/Layout'

import SmileIcon from '../public/icons/smile.svg'
import JavaScriptIcon from '../public/icons/javascript.svg'
import ReactIcon from '../public/icons/react.svg'
import HTML5Icon from '../public/icons/html5.svg'
import CSS3Icon from '../public/icons/css3.svg'

export default function Index() {
  return (
    <Layout
      title=''
      description=''
    >
      <div className='Index'>
        <div className='Index__intro'>
          <h1>
            <span className='Index__intro-highlight'>Front end</span> focused full stack developer and designer.
            <span className='Index__intro-icon'><SmileIcon /></span>
          </h1>
        </div>
        <div className='Index__skills'>
          <ul>
            <li><JavaScriptIcon />JavaScript</li>
            <li><ReactIcon />React</li>
            <li><HTML5Icon />HTML</li>
            <li><CSS3Icon />CSS</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
