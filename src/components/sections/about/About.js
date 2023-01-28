import { FaUser, FaFolder, FaHtml5 } from "react-icons/fa";
import React from 'react'

import selfie from '../../../assets/img/self-picture.jpg'
import Button from "../../layout/button/Button";

function About() {
  const aboutClass = 'shadow-2xl p-5 max-w-100 w-[250px] max-h-100 h-[200px] flex flex-col justify-center gap-5 items-center rounded-2xl bg-violet-800 hover:bg-violet-500 duration-300 hover:scale-110 leading-9 text-white text-center'

  return (
    <section id='about' className='h-[80vh] bg-gray-100 flex gap-5'>
      <div className='w-[80%] m-auto flex justify-center gap-[20px]'>
        <div className='w-[45%] h-full flex justify-center items-center'>
          <img src={selfie} alt="Selfie" className='h-[90%] object-cover border-solid border-[8px] border-violet-900 max-[768px]:hidden' />
        </div>
        <div className='flex flex-col gap-[50px] pt-[100px] w-[50%]'>
          <div className='flex flex-row gap-5'>
            <div className={aboutClass}>
              <FaUser className="text-3xl"/>
              <h1 className="font-bold">Experience</h1>
              <p className="font-thin">+2 Years</p>
            </div>
            <div className={aboutClass}>
              <FaHtml5 className="text-3xl"/>
              <h1 className="font-bold">Technologies</h1>
              <p className="font-thin">+10 Technologies</p>
            </div>
            <div className={aboutClass}>
              <FaFolder className="text-3xl"/>
              <h1 className="font-bold">Projects</h1>
              <p className="font-thin">+20 Completed</p>
            </div>
          </div>
          <p className="leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est quae, quia fugit repellat doloremque illo sequi temporibus totam at, dolorem dolore veniam! Consectetur minima eius sed veniam quos illo magni deleniti minus repellendus voluptatibus iste neque tempore, iusto fuga autem numquam consequuntur molestiae temporibus nemo corrupti non! Et, corrupti.</p>
          <Button classe='w-[180px] text-white '/>
        </div>
      </div>
    </section>
  )
}

export default About
