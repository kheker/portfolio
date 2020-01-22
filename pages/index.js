import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div className="root">
    <Head>
      <title>Kevin Perez | Full-Stack Developer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Hi, I'm Kevin Perez.</h1>
      <h4 className="description">
        I'm a full-Stack web developer
      </h4>
    </div>
  </div>
)

export default Home
