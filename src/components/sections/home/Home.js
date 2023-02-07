import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import homeImage from "../../../assets/img/home-picture.png"
import CV from './CV/gj-cv.pdf'
import "./Home.css"

function Home() {
  function letsTalk(e) {
    e.preventDefault();
    const elementToView = document.getElementById("contact");
    elementToView.scrollIntoView();
  }

  return (
    <section id="welcome">
      <div id="container">
        <div id="home-container">
          <img id="home-image" src={homeImage} alt="Start Image" />
          <div id="content">
            <h1>Geraldo Junior</h1>
            <p>Hello, welcome to my portfolio! Here you will know me a little better and the projects I've done throughout my career as a Web Developer. To learn more, continue down the page.</p>
          </div>
          <div id="homeBtn">
            <a href={CV} download="Geraldo Junior - CV">Download CV</a>
            <a href="#" onClick={letsTalk}>Let's Talk</a>
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
