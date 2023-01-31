import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import homeImage from '../../../assets/img/home-picture.png'
import './Home.css'

function Home() {
  return (
    <section id="welcome">
      <div id="container">
        <div id="home-container">
          <img id="home-image" src={homeImage} alt="Start Image" />
          <div id="content">
            <h1>Geraldo Junior</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic commodi maxime, impedit ducimus provident libero saepe in? Atque, dolore alias.</p>
          </div>
          <div id="homeBtn">
            <a href="#">Download CV</a>
            <a href="#">Let's Talk</a>
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
