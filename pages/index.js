import React from 'react'

import Layout from '../components/Layout'

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
        <div className='Index__corners'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='Index__intro'>
          <div className='Index__intro-accent'>[35.7596&deg;]</div>
          <h1><span className='Index__intro-highlight'>Front end</span> focused full stack developer and designer</h1>
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
