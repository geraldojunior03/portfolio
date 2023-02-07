import React from "react"
import { BsBoxArrowUpRight } from "react-icons/bs"

import "./ProjectCard.css"

function ProjectCard({ imagem, name, description, link }) {
  return (
    <div className="project">
      <img src={imagem} alt="Imagem projeto" />
      <div className="overlay">
        <h5>{name}</h5>
        <span>{description}</span>
        <a target="_blank" rel="noreferrer" href={link}>
          <BsBoxArrowUpRight />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
