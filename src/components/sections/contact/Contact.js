import React from 'react'
import Form from './form/Form'

import './Contact.css'

function Contact() {
  return (
    <section id="contact">
      <div className="contact-intro">
        <div className="content">
          <small>Contact Me</small>
          <h2>Get in touch with <span>Geraldo Junior</span></h2>
        </div>
      </div>
      <Form />
    </section>
  )
}

export default Contact
