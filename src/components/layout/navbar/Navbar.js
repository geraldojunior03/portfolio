import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import React, { useState } from 'react'

import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)

  function handleClick() {
    setClick(!click)
  }

  let toggleNavbar = click ? 'active' : null

  return (
    <header>
      <nav id="navbar" className={toggleNavbar}>
        <div>
          <h1>Geraldo Junior</h1>
        </div>
        <div id="navbar-links">
          <ul id="navbar-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Experiences</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
