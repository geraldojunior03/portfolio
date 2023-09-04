import React, { useState, useEffect } from "react"
import { BsEmojiFrown } from "react-icons/bs"

import ProjectCard from "./card/ProjectCard";
import dataProjetos from "../../../projects.json"
import "./Projects.css"

import AOS from "aos"
import  "aos/dist/aos.css"

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
        <h2>Projects</h2>
        <p>Here will have some projects that I developed</p>
      </div>
      <div className="projects-container">
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            Automation
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            Certificates
          </button>
        </div>
        <div className="content-tabs">
          <div className={toggleState === 1 ? "projects-content  active-content" : "projects-content"} >
            {
              dataProjetos.automation.length <= 0 ? (
                <div className="no-projects">
                  <p>Unfortunately, the owner of this project has not made any projects in this category.</p>
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
            toggleState === 1 && validacaoFront
          }
          <div className={toggleState === 2 ? "projects-content  active-content" : "projects-content"}>
            {
              dataProjetos.certificates.length <= 0 ? (
                <div className="no-projects">
                  <p>Unfortunately, the owner of this project has not made any projects in this category.</p>
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
                      link={projeto?.link}
                    />
                  )
                })
              )
            }
          </div>
          {
            toggleState === 2 && validacaoBack
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
