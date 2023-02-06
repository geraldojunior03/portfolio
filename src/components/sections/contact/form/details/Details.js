import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Details() {
  return (
    <div>
      <div class="details">
        <a href="#"><FaLinkedin className="logo" /></a>
        <p className="topic">LinkedIn</p>
        <p className="text-one">Geraldo Junior</p>
      </div>
      <div class="details">
        <a href="#"><FaGithub className="logo" /></a>
        <p className='topic'>GitHub</p>
        <p className="text-one">geraldojunior03</p>
      </div>
      <div class="details">
        <a href="#"><FaEnvelope className="logo" /></a>
        <p className='topic'>Email</p>
        <p className='text-one'>geraldojunior.2003@outlook.com</p>
      </div>
    </div>
  )
}

export default Details
