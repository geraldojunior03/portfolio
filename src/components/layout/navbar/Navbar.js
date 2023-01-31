import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import React, { useState } from 'react'

import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)
  const [fixed, setFixed] = useState(false)

  function handleClick() {
    setClick(!click)
  }

  function scrollWindow() {
    if (window.scrollY > 1){
      setFixed(true)
    }

    else {
      setFixed(false)
    }
  }

  function navbarClick(){
    const navbar = document.getElementById('navbar')
    if (navbar.classList.contains('active') === true){
      setClick(!click)
    }
  }

  let toggleNavbar = click ? 'active' : ''
  let windowScroll = fixed ? 'fixed' : ''

  window.addEventListener('scroll', scrollWindow)

  return (
    <header>
      <nav id="navbar" className={`${toggleNavbar} ${windowScroll}`}>
        <div>
          <h1>Geraldo Junior</h1>
        </div>
        <div id="navbar-links">
          <ul id="navbar-list">
            <li>
              <a href="#" onClick={`${navbarClick}`}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={`${navbarClick}`}>About</a>
            </li>
            <li>
              <a href="#" onClick={`${navbarClick}`}>Projects</a>
            </li>
            <li>
              <a href="#" onClick={`${navbarClick}`}>Skills</a>
            </li>
            <li>
              <a href="#" onClick={`${navbarClick}`}>Contact</a>
            </li>
          </ul>
        </div>
        <div id="menuMobile">
          {
            click
              ? <button onClick={handleClick} id="btnMobile"><HiOutlineX/></button>
              : <button onClick={handleClick} id="btnMobile"><HiOutlineMenuAlt3/></button>
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar
