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
          <img id="home-image" src={homeImage} alt="Start" />
          <div id="content">
            <h1>Geraldo Junior</h1>
            <p>Bem-vindo ao meu portfólio! Aqui, você terá a oportunidade de conhecer um pouco mais sobre mim e os projetos que desenvolvi ao longo da minha carreira como Desenvolvedor WEB. Continue rolando a página para obter mais informações.</p>
          </div>
          <div id="homeBtn">
            <a href={CV} download="Geraldo Junior - CV">Download CV</a>
            <a href="#contact">Contate-me</a>
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
