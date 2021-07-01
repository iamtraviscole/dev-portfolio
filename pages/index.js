import React from 'react'

import Layout from '../components/Layout'

import Smile from '../public/icons/smile.svg'

export default function Index() {
  return (
    <Layout
      title='Travis Cole - Web Development'
      description=''
    >
      <div className='Index'>
        <div className='Index__intro'>
          <h1 className='Index__intro-header'>
            Front end focused full stack developer and designer.
            <span className='Index__intro-header-smiley'><Smile /></span>
          </h1>
        </div>
        <div className='Index__skills'>
          <ul className='Index__skills-list'>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Ruby</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
