import React from 'react'

import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

import FolderIcon from '../public/icons/folder_open.svg'

export default function Projects() {
  return (
    <Layout
      title='Projects'
      description=''
    >
      <PageHeader heading='Projects' icon={FolderIcon} />
    </Layout>
  )
}