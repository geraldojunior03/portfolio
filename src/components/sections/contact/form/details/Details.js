import React from "react"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import "./Details.css"

function Details() {
  return (
    <div>
      <div className="details">
        <a href="https://www.linkedin.com/in/geraldo-junior03/" target="_blank" rel="noreferrer"><FaLinkedin className="logo" /></a>
        <p className="topic">LinkedIn</p>
        <p className="text-one">Geraldo Junior</p>
      </div>
      <div className="details">
        <a href="https://github.com/geraldojunior03" target="_blank" rel="noreferrer"><FaGithub className="logo" /></a>
        <p className="topic">GitHub</p>
        <p className="text-one">geraldojunior03</p>
      </div>
      <div className="details">
        <a href="mailto:geraldojunior.2003@outlook.com" target="_blank" rel="noreferrer"><FaEnvelope className="logo" /></a>
        <p className="topic">Email</p>
        <p className="text-one">geraldojunior.2003@outlook.com</p>
      </div>
    </div>
  )
}

export default Details
