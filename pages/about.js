import React from 'react'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

import UserIcon from '../public/icons/user_square.svg'

export default function About() {
  return (
    <Layout
      title='About'
      description=''
    >
      <PageHeader heading='About' icon={UserIcon} />
      
    </Layout>
  )
}
