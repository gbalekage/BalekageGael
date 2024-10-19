import React from 'react'
import './home.css'
import Me from '../../assets/gael.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="home__img" className='home__img' />
        <h1 className='home__name'>Balekage Gael</h1>
        <span>Je suis un developer FULL STACK et DESIGNER</span>
        <HeaderSocials />

        <a href="#contact" className='btn'>Contacts</a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home