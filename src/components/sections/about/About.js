import { BsGithub, BsLinkedin, BsEnvelopeFill, BsWhatsapp } from "react-icons/bs";

import logo from '../../../assets/img/foc-logo.png'

import React from 'react'

import './About.css'

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="content">
          <h2>About Me</h2>
        </div>
        <div className="about-me">
          <div className="about-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vero magni aliquid in dolor animi veritatis necessitatibus illo, sequi deleniti ad possimus labore culpa dignissimos nam molestias tempora voluptatibus at voluptate dolorem odit! Dolore, a et. Magnam repellendus consequuntur, ad, et tempora corporis saepe omnis a eius, in consectetur sequi!</p>
          </div>
          <div className="social-medias">
            <a href="#" className="button">
              <div className="icon">
                <BsLinkedin id="logo" />
              </div>
              <span>LinkedIN</span>
            </a>
            <a href="#" className="button">
              <div className="icon">
                <BsGithub id="logo" />
              </div>
              <span>GitHub</span>
            </a>
            <a href="#" className="button">
              <div className="icon">
                <BsEnvelopeFill id="logo" />
              </div>
              <span>Email</span>
            </a>
            <a href="#" className="button">
              <div className="icon">
                <BsWhatsapp id="logo" />
              </div>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        <div className="timeline">
          <div className="tl-container left-container">
            <img src={logo} alt="FOC LOGO" />
            <div className="text-box">
              <h2>Lorem IPSUM</h2>
              <p>0000 - 0000</p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati optio repellendus? Corporis placeat, dolor sapiente at nobis pariatur fugit?</span>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="tl-container right-container">
            <img src={logo} alt="FOC LOGO" />
            <div className="text-box">
              <h2>Lorem IPSUM</h2>
              <p>0000 - 0000</p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati optio repellendus? Corporis placeat, dolor sapiente at nobis pariatur fugit?</span>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="tl-container left-container">
            <img src={logo} alt="FOC LOGO" />
            <div className="text-box">
              <h2>Lorem IPSUM</h2>
              <p>0000 - 0000</p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati optio repellendus? Corporis placeat, dolor sapiente at nobis pariatur fugit?</span>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="tl-container right-container">
            <img src={logo} alt="FOC LOGO" />
            <div className="text-box">
              <h2>Lorem IPSUM</h2>
              <p>0000 - 0000</p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati optio repellendus? Corporis placeat, dolor sapiente at nobis pariatur fugit?</span>
              <span className="right-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
