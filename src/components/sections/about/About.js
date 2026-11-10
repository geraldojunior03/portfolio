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
          <small>Sobre mim</small>
          <h2>Quem é&nbsp;
          <TypeIt
            options={{
              strings: ["Geraldo Junior?"],
              waitUntilVisible: true,
              speed: 150,
              loop: true
            }}
          />
          </h2>
        </div>
        <p>Olá, eu sou Geraldo Junior, profissional da área de tecnologia com foco em qualidade de software e automação de testes. Desenvolvi este portfólio com o objetivo de apresentar meus projetos, experiências e soluções que venho construindo ao longo da minha trajetória. Aqui você encontrará aplicações desenvolvidas para aprimoramento técnico e demonstração prática das minhas habilidades em desenvolvimento e automação.</p>
        <div className="soft-skills">
          <Circle number={100} skill="Proatividade"/>
          <Circle number={98} skill="Comunicação"/>
          <Circle number={95} skill="Trabalho em Equipe"/>
        </div>
      </div>
    </section>
  )
}

export default About
