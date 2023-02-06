import React from 'react'

import './About.css'
import aboutImage from '../../../assets/img/about.svg'
import Circle from './circle/Circle'

function About() {
  return (
    <section id="about">
      <img src={aboutImage} alt="About" />
      <div className="about-content">
        <div className="about-intro">
          <small>About Me</small>
          <h2>Who is <span>Geraldo Junior</span></h2>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maxime mollitia labore alias consequatur! Iusto recusandae officia nihil autem dolorum earum animi beatae, aperiam molestiae distinctio inventore accusamus cum consectetur quod provident vero, error odit deleniti delectus ipsum voluptatum? Dolor aut officia quisquam accusantium, molestias maiores cumque et aspernatur magnam.</p>
        <div className="soft-skills">
          <Circle number={100} skill="Proactivity"/>
          <Circle number={70} skill="Creativity"/>
          <Circle number={80} skill="Communication"/>
        </div>
      </div>
    </section>
  )
}

export default About
