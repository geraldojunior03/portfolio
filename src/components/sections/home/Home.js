import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import homeImage from '../../../assets/img/home-picture.png'
import './Home.css'

function Home() {
  return (
    <section id="welcome">
      <div id="container">
        <img id="home-image" src={homeImage} alt="Start Image" />
        <div id="content">
          <h1>Geraldo Junior</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic commodi maxime, impedit ducimus provident libero saepe in? Atque, dolore alias.</p>
        </div>
        <div id="homeBtn" className='pt-5 flex gap-5 text-white max-[380px]:flex-col'>
          <a className='bg-violet-900 duration-300 hover:bg-violet-700 hover:scale-x-110 px-12 py-3 rounded-2xl' href="#">Let's Talk</a>
          <a className='bg-zinc-200 duration-300 hover:bg-zinc-300 hover:scale-x-110 text-black px-12 py-3 rounded-2xl' href="#">Let's Talk</a>
        </div>
        <div id="social-medias" className='absolute bottom-[10%] left-[10%] flex flex-col gap-3 text-xl cursor-pointer max-[768px]:hidden'>
          <a href="https://github.com/geraldojunior03" target="_blank" rel="noreferrer">
           <BsGithub/>
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
