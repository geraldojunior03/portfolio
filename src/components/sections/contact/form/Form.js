import React from "react"

import Details from "./details/Details";
import Input from "./input/Input";

import formDec from "../../../../assets/img/contact-dec.png"
import "./Form.css"

function Form() {
  return (
    <div className="form-container">      
      <img src={formDec} alt="aaa" className="formDec"/>
      <div className="form-content">
        <div className="left-side">
          <Details />
        </div>
        <div className="right-side">
          <h2 className="topic-text">Contact Me</h2>
          <Input />
        </div>
      </div>
    </div>
  )
}

export default Form
