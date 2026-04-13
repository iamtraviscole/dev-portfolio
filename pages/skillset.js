import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

import CodeIcon from '../public/icons/window_code.svg'

export default function Skillset() {
  return (
    <Layout
      title='Skillset'
      description=''
    >
       <div className='Skillset'>
        <PageHeader heading='Skillset' icon={<CodeIcon />} />
        <div className='Skillset__skills'>
          <section className='Skillset__skills-section'>
            <div className='Skillset__skills-section-heading'>
              <div>[FE-01]</div>
              <h2>Frontend</h2>
            </div>
            <h3>Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
            </ul>
            <h3>Libraries & Frameworks</h3>
            <ul>
              <li>React</li>
              <li>SvelteKit</li>
              <li>Redux</li>
              <li>Apollo Client</li>
              <li>Next.js</li>
              <li>Gatsby</li>
              <li>Formik</li>
              <li>Yup</li>
              <li>CSS Modules</li>
              <li>Styled Components</li>
              <li>Tailwind CSS</li>
              <li>Axios</li>
            </ul>
          </section>
          <section className='Skillset__skills-section'>
            <div className='Skillset__skills-section-heading'>
              <div>[BE-02]</div>
              <h2>Backend</h2>
            </div>
            <h3>Languages</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>Ruby</li>
              <li>SQL</li>
            </ul>
            <h3>Libraries & Frameworks</h3>
            <ul>
              <li>Express</li>
              <li>Apollo GraphQL</li>
              <li>Knex</li>
              <li>SQLAlchemy</li>
              <li>Alembic</li>
              <li>Rails</li>
              <li>OmniAuth</li>
            </ul>
            <h3>Databases</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>SQLite</li>
            </ul>
          </section>
          <section className='Skillset__skills-section'>
            <div className='Skillset__skills-section-heading'>
              <div>[D-03]</div>
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
              <li>Adobe XD</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
            </ul>
          </section>
          <section className='Skillset__skills-section'>
            <div className='Skillset__skills-section-heading'>
              <div>[O-04]</div>
              <h2>Other</h2>
            </div>
            <h3>AI</h3>                                                                                                                                                                                    
            <ul>                                                                           
              <li>Prompt engineering</li>
              <li>Structured output parsing</li>                                           
              <li>Batch processing</li>                                                  
            </ul>
            <h3>Version Control</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
            <h3>Package Managers</h3>
            <ul>
              <li>npm</li>
              <li>pnpm</li>
              <li>RubyGems</li>
            </ul>
            <h3>Search</h3>
            <ul>
              <li>Algolia</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  )
}
