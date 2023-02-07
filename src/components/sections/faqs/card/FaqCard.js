import React, { useState } from "react"

import "./FaqCard.css"

function FaqCard({ text, answer }) {
  const [toggleFaq, setToggleFaq] = useState(false)
  let isToggled = toggleFaq ? "active" : null

  function handleFaq(){
    setToggleFaq(!toggleFaq)
  }

  return (
    <div className={`faq ${isToggled}`} onClick={handleFaq}>
      <div className="question">
        <h3>{text}</h3>
        <svg width="15" height="10" viewBox="0 0 42 25">
          <path 
            d="M3 3L21 21L39 3"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default FaqCard
