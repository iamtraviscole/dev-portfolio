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
          <h2>Front end focused full stack developer & designer</h2>
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
            <img>{ /*TODO: add picture */}</img>
            <span>[Fig. 1]</span>
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
              <div>[T-02]</div>
              <h2>Tools</h2>
            </div>
            <h3>Software</h3>
            <ul>
              <li>Visual Studio Code</li>
              <li>Terminal</li>
              <li>GitHub Desktop</li>
              <li>Figma</li>
              <li>Adobe Creative Suite</li>
            </ul>
          </section>
          {/* <section className='About__details-section'>
            <div className='About__details-section-heading'>
              <div>[H-03]</div>
              <h2>Hobbies</h2>
            </div>
            <h3>Sports</h3>
            <ul>
              <li>Hockey</li>
            </ul>
            <h3>Games</h3>
            <ul>
              <li>Valorant</li>
              <li>CS:GO</li>
              <li>Overwatch</li>
              <li>League of Legends</li>
            </ul>
            <h3>Other</h3>
            <ul>
              <li>Biking</li>
              <li>Hiking</li>
              <li>Fitness</li>
              <li>Music</li>
              <li>Movies</li>
            </ul>
          </section> */}
        </div>
      </div>
    </Layout>
  )
}
