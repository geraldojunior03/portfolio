import React, { useState } from 'react'
import { BsEmojiFrown } from 'react-icons/bs'

import ProjectCard from './card/ProjectCard';
import dataProjetos from '../../../projects.json'
import './Projects.css'

import { validacaoFront, validacaoBack, validacaoOthers } from './functions/ValidacoesCard'

function Projects() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="projects">
      <div className="projects-text">
        <h2>Projetos</h2>
        <p>Here will have some projects that I developed</p>
      </div>
      <div className="projects-container">
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            Front End
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            Back End
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            Others
          </button>
        </div>
        <div className="content-tabs">
          <div className={toggleState === 1 ? "projects-content  active-content" : "projects-content"} >
            {
              dataProjetos.frontend.length <= 0 ? (
                <div className='no-projects'>
                  <p>Unfortunately, the owner of this project has not made any projects in this category.</p>
                  <BsEmojiFrown id='sad-face' />
                </div>
              ) : (
                dataProjetos.frontend.slice(0, 6).map((projeto) => {
                  return (
                    <ProjectCard
                      key={projeto.name}
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
              dataProjetos.backend.map((projeto) => {
                return (
                  <ProjectCard
                    key={projeto.name}
                    imagem={projeto?.imagem}
                    name={projeto?.name}
                    description={projeto?.description}
                    link={projeto?.link}
                  />
                )
              })
            }
          </div>
          {
            toggleState === 2 && validacaoBack
          }
          <div className={toggleState === 3 ? "projects-content  active-content" : "projects-content"}>
            {
              dataProjetos.others.map((projeto) => {
                return (
                  <ProjectCard
                    key={projeto.name}
                    imagem={projeto?.imagem}
                    name={projeto?.name}
                    description={projeto?.description}
                    link={projeto?.link}
                  />
                )
              })
            }
          </div>
          {
            toggleState === 3 && validacaoOthers
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
