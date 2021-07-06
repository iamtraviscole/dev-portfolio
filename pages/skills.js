import React from 'react'

import Layout from '../components/Layout'

import CodeIcon from '../public/icons/window_code.svg'

export default function Skills() {
  return (
    <Layout
      title='Skills'
      description=''
    >
      <div className='Skills'>
        <div className='Skills__header'>
          <span className='Skills__header-particle'></span>
          <div className='Skills__header-heading'>
            <h1>Skills</h1>
            <span><CodeIcon /></span>
          </div>
        </div>
        <div className='Skills__skills'>
          <section className='Skills__skills-section'>
              <div className='Skills__skills-section-heading'>
                <span>01.</span>
                <h2 className='green'>Front End</h2>
              </div>
              <h3>Languages</h3>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sass</li>
              </ul>
              <h3>Libraries & Frameworks</h3>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>Apollo Client</li>
                <li>Next.js</li>
                <li>Gatsby</li>
                <li>Formik</li>
                <li>Yup</li>
                <li>CSS Modules</li>
                <li>Styled Components</li>
                <li>Axios</li>
              </ul>
          </section>
          <section className='Skills__skills-section'>
              <div className='Skills__skills-section-heading'>
                <span>02.</span>
                <h2>Back End</h2>
              </div>
              <h3>Languages</h3>
              <ul>
                <li>JavaScript (Node.js)</li>
                <li>Ruby</li>
                <li>SQL</li>
              </ul>
              <h3>Libraries & Frameworks</h3>
              <ul>
                <li>Express</li>
                <li>Apollo GraphQL</li>
                <li>Knex</li>
                <li>Rails</li>
                <li>OmniAuth</li>
              </ul>
              <h3>Databases</h3>
              <ul>
                <li>PostgreSQL</li>
                <li>SQLite</li>
              </ul>
          </section>
          <section className='Skills__skills-section'>
              <div className='Skills__skills-section-heading'>
                <span>03.</span>
                <h2>Design</h2>
              </div>
              <h3>Disciplines</h3>
              <ul>
                <li>Web</li>
                <li>Print</li>
                <li>Logo & Identity</li>
              </ul>
              <h3>Tools</h3>
              <ul>
                <li>Figma</li>
                <li>Adobe Xd</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
              </ul>
          </section>
          <section className='Skills__skills-section'>
              <div className='Skills__skills-section-heading'>
                <span>04.</span>
                <h2>Other</h2>
              </div>
              <h3>Version Control</h3>
              <ul>
                <li>Git (Github)</li>
              </ul>
              <h3>Package Managers</h3>
              <ul>
                <li>npm</li>
                <li>RubyGems</li>
              </ul>
          </section>
        </div>
      </div>
    </Layout>
  )
}
