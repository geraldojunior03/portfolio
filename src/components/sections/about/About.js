import React from 'react'

import './About.css'
import aboutImage from '../../../assets/img/About.svg'

function About() {
  return (
    <section id="about">
      <img src={aboutImage} alt="About Image" />
      <div className="about-content">
        <div className="about-intro">
          <small>About Me</small>
          <h2>Who is <span>Geraldo Junior</span></h2>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maxime mollitia labore alias consequatur! Iusto recusandae officia nihil autem dolorum earum animi beatae, aperiam molestiae distinctio inventore accusamus cum consectetur quod provident vero, error odit deleniti delectus ipsum voluptatum? Dolor aut officia quisquam accusantium, molestias maiores cumque et aspernatur magnam.</p>
        <div className="soft-skills">
          <div className="circle">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className='percent'>
              <h2>80%</h2>
              <small>Coding</small>
            </div>
          </div>
          <div className="circle">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className='percent'>
              <h2>80%</h2>
              <small>Coding</small>
            </div>
          </div>
          <div className="circle">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className='percent'>
              <h2>80%</h2>
              <small>Coding</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
