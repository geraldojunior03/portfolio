import { FaHome, FaReadme, FaClipboardList, FaPhone } from "react-icons/fa";

import React from 'react'

function FloatingNav() {
  const floatingClass = 'duration-300 hover:scale-[1.25] hover:shadow-3xl'
  return (
    <div>
      <div className='fixed max-w-full w-96 h-20 rounded-[40px] bottom-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-violet-900 md:hidden flex justify-evenly items-center text-3xl text-white shadow-4xl'>
        <a href="#home" className={floatingClass}>
          <FaHome />
        </a>
        <a href="#home" className={floatingClass}>
          <FaReadme />
        </a>
        <a href="#home" className={floatingClass}>
          <FaClipboardList />
        </a>
        <a href="#home" className={floatingClass}>
          <FaPhone />
        </a>
      </div>
    </div>
  )
}

export default FloatingNav
