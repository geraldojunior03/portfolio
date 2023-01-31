import React from 'react'

import imagem from '../../../assets/img/about.svg'

function ProjectCard({ name }) {
  return (
    <div className="project">
      <div className="image-container">
        <img src={imagem} alt="Imagem projeto" />
      </div>
      <div className="text-content">
        <a href="#">{name}</a>
        <a href="#">name</a>
      </div>
    </div>
  )
}

export default ProjectCard
