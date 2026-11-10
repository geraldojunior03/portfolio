import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa";

import "./Footer.css"

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Geraldo Junior</h2>
          <p>Portfolio desenvolvido exclusivamente por Geraldo Junior.</p>
        </div>
        <nav className="footer-medias" aria-label="Redes sociais">
          <a href="https://www.linkedin.com/in/geraldo-junior03/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/geraldojunior03" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        </nav>
        <p className="footer-copyright">Copyright &copy;2023 Geraldo Junior.</p>
      </div>
    </footer>
  )
}

export default Footer
