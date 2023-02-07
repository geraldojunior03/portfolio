import React, {useEffect} from "react"
import FaqCard from "./card/FaqCard"
import dataFaq from "./card/faqs.json"

import AOS from "aos"
import  "aos/dist/aos.css"

import "./Faqs.css"

function Faqs() {
  useEffect(() => {
    AOS.init();
  })

  return (
    <section id="faqs" data-aos="fade-down">
      <div className="title">
        <small>FAQs</small>
        <h2>Some questions <span>about me</span></h2>
      </div>
      <div className="faqs-section">
        {
          dataFaq.faqs.map((faq) => {
            return (
              <FaqCard
                key={faq.text}
                text={faq.text}
                answer={faq.answer}
              />
            )
          })
        }
      </div>
    </section>
  )
}

export default Faqs
