import React, { useState, useEffect } from "react"
import { BsEmojiFrown } from "react-icons/bs"

import ProjectCard from "./card/ProjectCard";
import dataProjetos from "../../../projects.json"
import Timeline from "./timeline/Timeline";
import "./Projects.css"

import AOS from "aos"
import "aos/dist/aos.css"

import { validacaoFront, validacaoBack } from "./functions/ValidacoesCard"

function Projects() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    AOS.init();
  })

  return (
    <section id="projects" data-aos="fade-right">
      <div className="projects-text">
        <h2>Projetos</h2>
        <p>Aqui irão conter projetos e certificados que já desenvolvi/conquistei.</p>
      </div>
      <div className="projects-container">
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            Certificados
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            Experiências
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            Automação
          </button>
        </div>
        <div className="content-tabs">
        <div className={toggleState === 1 ? "projects-content  active-content" : "projects-content"}>
            {
              dataProjetos.certificates.length <= 0 ? (
                <div className="no-projects">
                  <p>Infelizmente, o proprietário deste projeto não realizou nenhum projeto nesta categoria.</p>
                  <BsEmojiFrown id="sad-face" />
                </div>
              ) : (
                dataProjetos.certificates.slice(0, 6).map((projeto) => {
                  return (
                    <ProjectCard
                      key={projeto?.id}
                      imagem={projeto?.imagem}
                      name={projeto?.name}
                      description={projeto?.description}
                      link={projeto?.imagem}
                    />
                  )
                })
              )
            }
          </div>
          {
            toggleState === 1 && validacaoBack
          }

          <div className={toggleState === 2 ? "projects-content  active-content" : "projects-content"} >
            <Timeline />
          </div>

          <div className={toggleState === 3 ? "projects-content  active-content" : "projects-content"} >
            {
              dataProjetos.automation.length <= 0 ? (
                <div className="no-projects">
                  <p>Infelizmente, o proprietário deste projeto não realizou nenhum projeto nesta categoria.</p>
                  <BsEmojiFrown id="sad-face" />
                </div>
              ) : (
                dataProjetos.automation.slice(0, 6).map((projeto) => {
                  return (
                    <ProjectCard
                      key={projeto?.id}
                      imagem={projeto?.imagem}
                      name={projeto?.name}
                      description={projeto?.description}
                      link={projeto?.link}
                    />
                  )
                })
              )

            }
          </div>
          {
            toggleState === 3 && validacaoFront
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
