import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

import UserIcon from '../public/icons/user_square.svg'

export default function About() {
  return (
    <Layout
      title='About'
      description=''
    >
      <PageHeader heading='About' icon={<UserIcon />} />
      <div className='About'>
        <div className='About__description'>
          <h2>Frontend focused full-stack developer & designer</h2>
        </div>
        <div className='About__bio'>
          <div className='About__bio-text'>
            <p>
              I started experimenting with web design in the early 2000s during the &lt;table&gt; layout era. However, 
              at the time, I found myself gravitating toward the design side of things, eventually becoming a graphic 
              and logo designer - still building basic websites on the side for clients and for fun.
            </p>
            <p>
              But, as web technology and tools evolved, I found myself gravitating back to the development side of things. 
              I increasingly wanted to be able to build more complex, dynamic web apps. So I learned and made the shift to full-stack development. 
              These days I'm a full-time web developer working across the entire stack with a focus on front-end technologies like React, 
              SvelteKit, and TypeScript.
            </p>
          </div>
          <div className='About__bio-pic'>
            <div className='About__bio-pic-wrap'>
              <img src="/images/devpic.jpg" />
              <span>[Fig. 1]</span>
            </div>
          </div>
        </div>
        <div className='About__details'>
          <section className='About__details-section'>
            <div className='About__details-section-heading'>
              <div>[E-01]</div>
              <h2>Education</h2>
            </div>
            <h3>Flatiron School</h3>
            <ul>
              <li>Software Engineering</li>
            </ul>
            <h3>North Carolina State University</h3>
            <ul>
              <li>B.S. Business Management</li>
              <li>Information Technology Concentration</li>
            </ul>
          </section>
          <section className='About__details-section'>
            <div className='About__details-section-heading'>
              <div>[X-02]</div>
              <h2>Experience</h2>
            </div>
            <h3>Current</h3>
            <div className='About__details-section-xp'>
              <h4><span>Web Developer (Contract)</span><span><strong>KPDI</strong></span><span className='About__details-section-xp-date'>[2024 - Present]</span></h4>
              <ul>
                <li>Full-stack development on various client projects</li>
                <li>Frontend development using SvelteKit, React, TypeScript, and Tailwind CSS</li>
                <li>Backend API development using Python, FastAPI, SQLAlchemy, and PostgreSQL</li>
                <li>AI prompt engineering, batch processing, and structured output parsing</li>
              </ul>
              <h4><span>Freelance Web Developer</span><span className='About__details-section-xp-date'>[2020 - Present]</span></h4>
              <ul>
                <li>Frontend development using JavaScript, TypeScript, React, Next.js, Gatsby, and more</li>
                <li>Backend development using Node.js, Ruby, Rails, PostgreSQL and more</li>
                <li>E-commerce integration with Stripe, Shopify, and BigCartel</li>
                <li>Content management integration with WordPress and various headless CMSs</li>
                <li>Auth integration using Firebase Authentication</li>
              </ul>
            </div>
            <h3>Previous</h3>
            <div className='About__details-section-xp'>
              <h4><span>Web Developer (Contract)</span><span><strong>Equiptron</strong></span><span className='About__details-section-xp-date'>[2020 - 2021]</span></h4>
              <ul>
                <li>Full-stack development on custom CRM application</li>
                <li>Frontend development using React and Apollo Client</li>
                <li>Backend development using Node.js, Express, GraphQL, Knex, and PostgreSQL</li>
              </ul>
              <h4><span>Freelance Graphic, Web, & Identity Designer</span><span className='About__details-section-xp-date'>[2010 - 2020]</span></h4>
              <ul>
                <li>Digital and print design including logos, websites, marketing materials, packaging, and more</li>
                <li>Long-term client relationships spanning 5+ years</li>
              </ul>
            </div>
          </section>
          <section className='About__details-section'>
            <div className='About__details-section-heading'>
              <div>[T-03]</div>
              <h2>Tools</h2>
            </div>
            <h3>Software</h3>
            <ul>
              <li>Visual Studio Code</li>
              <li>Terminal</li>
              <li>Postman</li>
              <li>TablePlus</li>
              <li>Figma</li>
              <li>Adobe Creative Suite</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  )
}
