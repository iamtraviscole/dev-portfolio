import React from 'react'

import Layout from '../components/Layout'

import SmileIcon from '../public/icons/smile.svg'

export default function Index() {
  return (
    <Layout
      title=''
      description=''
    >
      <div className='Index'>
        <div className='Index__intro'>
          <h1>
            Front end focused full stack developer and designer.
            <span><SmileIcon /></span>
          </h1>
        </div>
        <div className='Index__skills'>
          <ul>
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
