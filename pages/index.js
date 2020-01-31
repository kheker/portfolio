import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import '../style/style.scss';


const Home = () => (
  <div className="root">
    <Head>
      <title>Kevin Perez | Full-stack Developer</title>
      <meta name="description" content="full-Stack web developer" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">Hi, I'm <span>Kevin Perez</span>.</h1>
      <h4 className="description">
        I'm a full-stack web developer
      </h4>
    </div>
    <section className="meet-section">
      <div className="container">
        <div className="description">
          <h2>
            Hi, Nice to meet you.
          </h2>
          <p>
            beginning my journey as a freelance developer nearly 3 years ago.
            I've done remote work for startups and collaborations.
            <span>I just love to sit and watch code compile.| I love what i do.</span>
          </p>
        </div>
      </div>
    </section>
    <hr />
    <section className="skills">
      <h2>
        My skills
      </h2>
      <div className="wrapper">
        <div className="box">
          <div className="icon-img">
            <img src="/layout.svg" alt="layouts" />
          </div>
          <h2 className="title">Front-End Developer</h2>
          <ul>
            <li>HTML</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>Javascript</li>
            <li>ReactJs</li>
          </ul>
        </div>
        <div className="box">
          <div className="icon-img">
            <img src="/layers.svg" alt="layers" />
          </div>
          <h2 className="title">Back-End Developer</h2>
          <ul>
            <li>NodeJs</li>
            <li>Express</li>
            <li>MongoDb</li>
            <li>Graphql</li>
          </ul>
        </div>
        <div className="box">
          <div className="icon-img">
            <img src="/github.svg" alt="github-logo" />
          </div>
          <h2 className="title">Dev-Tools</h2>
          <ul>
            <li>VS Code</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Bitbucket</li>
            <li>Docker</li>
            <li>Frameworks Css</li>
          </ul>
        </div>
      </div>
    </section>
    <hr />
    <section className="portfolio">
      <h2>My portfolio</h2>
    </section>
  </div>
)

export default Home
