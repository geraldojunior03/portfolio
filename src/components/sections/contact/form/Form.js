import React from 'react'

import Details from './details/Details';
import Input from './input/Input';

import formDec from '../../../../assets/img/contact-dec.png'
import './Form.css'

function Form() {
  return (
    <div class="form-container">      
      <img src={formDec} alt="aaa" className='formDec'/>
      <div class="form-content">
        <div class="left-side">
          <Details />
        </div>
        <div class="right-side">
          <h2 className='topic-text'>Contact Me</h2>
          <Input />
        </div>
      </div>
    </div>
  )
}

export default Form
