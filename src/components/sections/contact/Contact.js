import React, {useEffect} from "react"
import Form from "./form/Form"

import AOS from "aos"
import  "aos/dist/aos.css"

import "./Contact.css"

function Contact() {
  useEffect(() => {
    AOS.init();
  })

  return (
    <section id="contact" data-aos="fade-up">
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
