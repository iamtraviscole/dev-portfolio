import React from 'react'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

import MessageIcon from '../public/icons/message_writing.svg'

export default function Contact() {
  return (
    <div>
      <Layout
        title='Contact'
        description=''
      > 
      <PageHeader heading='Contact' icon={MessageIcon} />

      </Layout>
    </div>
  )
}
