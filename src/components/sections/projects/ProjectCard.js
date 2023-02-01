import React from 'react'

import { BsBoxArrowUpRight } from 'react-icons/bs'
import './ProjectCard.css'

import imagem from '../../../assets/img/project.png'

function ProjectCard({ name, description }) {
  return (
    <div className="project">
      <img src={imagem} alt="Imagem projeto" />
      <div className="overlay">
        <h5>{name}</h5>
        <span>{description}</span>
        <a href="#">
          <BsBoxArrowUpRight />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
