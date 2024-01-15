import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import React, { useState } from "react"

import "./Navbar.css"

function Navbar() {
  const [click, setClick] = useState(false)

  function handleClick() {
    setClick(!click)
  }

  function navbarClick(){
    const navbar = document.getElementById("navbar")
    if (navbar.classList.contains("active") === true){
      setClick(!click)
    }
  }

  return (
    <header>
      <nav id="navbar" className={`${click ? 'active' : ''}`}>
        <div>
          <h1>Geraldo Junior</h1>
        </div>
        <div className="navbar-links">
          <ul className="navbar-list">
            <li>
              <a href="#home" onClick={navbarClick}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={navbarClick}>Sobre Mim</a>
            </li>
            <li>
              <a href="#projects" onClick={navbarClick}>Projetos</a>
            </li>
            <li>
              <a href="#faqs" onClick={navbarClick}>Faqs</a>
            </li>
            <li>
              <a href="#contact" onClick={navbarClick}>Contato</a>
            </li>
          </ul>
        </div>
        <div className="menuMobile">
          {
            click
              ? <button onClick={handleClick} className="btnMobile"><HiOutlineX/></button>
              : <button onClick={handleClick} className="btnMobile"><HiOutlineMenuAlt3/></button>
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar
