import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import homeImage from "../../../assets/img/home-picture.png"
import CV from './CV/gj-cv.pdf'
import "./Home.css"

function Home() {
  return (
    <section id="welcome">
      <div id="container">
        <div id="home-container">
          <div className="home-portrait">
            <img id="home-image" src={homeImage} alt="Geraldo Junior" />
            <div className="portrait-label">
              <span>QA ENGINEER</span>
              <small>Automação &amp; Qualidade</small>
            </div>
          </div>
          <div id="content">
            <h1>Geraldo Junior</h1>
            <p>QA apaixonado por qualidade de software, automação e melhoria contínua. Trabalho criando frameworks robustos e integrando testes a pipelines CI/CD para garantir entregas mais seguras e eficientes.</p>
          </div>
          <div id="homeBtn">
            <a href="#contact">Contate-me</a>
            <a href={CV} download="Geraldo Junior - CV">Download CV</a>
          </div>
        </div>
        <div id="social-medias">
          <a href="https://github.com/geraldojunior03" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/geraldo-junior03/" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://wa.link/3uem9p" target="_blank" rel="noreferrer">
            <BsWhatsapp />
          </a>
          <a href="mailto:geraldojunior.2003@outlook.com">
            <MdEmail />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
