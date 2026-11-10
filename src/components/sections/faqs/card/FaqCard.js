import React, { useId, useState } from "react"
import { FiPlus } from "react-icons/fi"

import "./FaqCard.css"

function FaqCard({ text, answer }) {
  const [toggleFaq, setToggleFaq] = useState(false)
  const answerId = useId()
  const isToggled = toggleFaq ? "active" : ""

  function handleFaq(){
    setToggleFaq(!toggleFaq)
  }

  return (
    <div className={`faq ${isToggled}`}>
      <button
        className="question"
        type="button"
        aria-expanded={toggleFaq}
        aria-controls={answerId}
        onClick={handleFaq}
      >
        <h3>{text}</h3>
        <span className="faq-toggle"><FiPlus aria-hidden="true" /></span>
      </button>
      <div className="answer" id={answerId} aria-hidden={!toggleFaq}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default FaqCard
