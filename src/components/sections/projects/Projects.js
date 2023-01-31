import React, { useState } from 'react'

import ProjectCard from './ProjectCard';
import { projetos } from '../../../projects.json'
import './Projects.css'

function Projects() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="projects">
      <div className="projects-container">
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            Front End
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            Back End
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            Tab 3
          </button>
        </div>
        <div className="content-tabs">
          <div className={toggleState === 1 ? "projects-content  active-content" : "projects-content"} >
            {/* {
            projetos.map((project) => {
              return (
                <ProjectCard name={project.name}/>
              )
            })           
          } */}
            <ProjectCard />
          </div>

          <div className={toggleState === 2 ? "projects-content  active-content" : "projects-content"}>
            <ProjectCard />
          </div>

          <div className={toggleState === 3 ? "projects-content  active-content" : "projects-content"}>
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
