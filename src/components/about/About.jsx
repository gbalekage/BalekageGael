import React from 'react'
import './about.css'
import Image from '../../assets/gael.svg'
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className="section__title">Apropos de moi</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          
          <div className="about__info">
            <p className='about__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque consequatur voluptatem ex consequuntur placeat odio, dicta repudiandae, vel id molestiae quibusdam maiores facere quaerat nisi quia voluptas explicabo nemo. Dicta doloremque esse assumenda asperiores.</p>

            <a href="" className='btn'>Mon CV</a>
          </div>

          <div className="about__skills grid">

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Frontend</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__pourcentage fronted"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Backend</h3>
                <span className="skills__number">95%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__pourcentage backend"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Graphic Design</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__pourcentage graphic__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Photographie</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__pourcentage photographie"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About