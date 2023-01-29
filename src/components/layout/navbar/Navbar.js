import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

import React from 'react'

import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)

  function handleClick() {
    setClick(!click)
  }

  return (
    <header>
      <nav id="navbar">
        <div>
          <h1>Geraldo Junior</h1>
        </div>
        <div>
          <ul>
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
        <div onClick={handleClick}>
          {
            click 
            ? <button id="btnMobile"><FaSun /></button>  
            : <button id="btnMobile"><FaMoon /></button>
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar
