import React, { useState } from "react"
import { FaAngleUp } from "react-icons/fa";


import "./ScrollTop.css"

function ScrollTop() {
  const [fixed, setFixed] = useState(false)

  function scrollWindow() {
    if (window.scrollY > 20){
      setFixed(true)
    }
  
    else {
      setFixed(false)
    }
  }
  
  function scrollTop(){
    window.scrollTo({
      top: 0
    })
  }
  
  let windowScroll = fixed ? "active" : null
  window.addEventListener("scroll", scrollWindow)

  return (
    <div className={windowScroll} id="btnmobile" onClick={scrollTop}>
      <FaAngleUp />
    </div>
  )
}

export default ScrollTop
