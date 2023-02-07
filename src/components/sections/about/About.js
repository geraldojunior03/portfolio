import React, {useEffect} from "react"

import "./About.css"
import aboutImage from "../../../assets/img/about.svg"
import Circle from "./circle/Circle"

import AOS from "aos"
import "aos/dist/aos.css"

import TypeIt from 'typeit-react';

function About() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <section id="about" data-aos="fade-up">
      <img src={aboutImage} alt="About" />
      <div className="about-content">
        <div className="about-intro">
          <small>About Me</small>
          <h2>Who is  
          <TypeIt
            options={{
              strings: [" Geraldo Junior?"],
              waitUntilVisible: true,
              speed: 150,
              loop: true
            }}
          />
          </h2>
        </div>
        <p>Hello, nice to meet you guys! My name is Geraldo Junior and this one is my portfolio and I developed it with the intention of showing all my projects that I've done both to sell and to train my skills. This site was designed based on some projects that I have already developed, or I based it on having seen it in some video on the internet or even images on the internet.</p>
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
