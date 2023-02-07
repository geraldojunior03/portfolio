import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa";

import "./Footer.css"

function Footer() {
  return (
    <footer id="footer">
      <h2>Geraldo Junior</h2>
      <p>Portfolio website developed by Geraldo Junior.</p>
      <div className="footer-medias">
        <a href="https://www.linkedin.com/in/geraldo-junior03/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/geraldojunior03" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
      <p>Copyright &copy;2023 Geraldo Junior.</p>
    </footer>
  )
}

export default Footer
