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
        <p>Olá, prazer em conhecer vocês! Meu nome é Geraldo Junior e este é meu portfólio e o desenvolvi com o intuito de mostrar todos os meus projetos que tenho feito tanto para vender quanto para treinar minhas habilidades. Este site foi desenhado com base em alguns projetos que já desenvolvi, ou baseei-me em ter visto em algum vídeo na internet ou mesmo em imagens na internet.</p>
        <div className="soft-skills">
          <Circle number={100} skill="Proatividade"/>
          <Circle number={70} skill="Criatividade"/>
          <Circle number={80} skill="Comunicação"/>
        </div>
      </div>
    </section>
  )
}

export default About
