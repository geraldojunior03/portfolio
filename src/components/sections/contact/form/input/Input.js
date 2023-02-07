import React from "react"

import "./Input.css"

function Input() {
  return (
    <form action="https://api.sheetmonkey.io/form/sAGS8No8sAphSxZMHZXTmi" method="post"> 
      <div className="input-box">
        <input type="text" placeholder="Enter your name" name="Nome"/>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" name="Email"/>
      </div>
      <div className="input-box message-box">
        <textarea placeholder="Send me your message" name="Mensagem"/>
      </div>
      <div className="button">
        <input type="submit" value="Send Now" />
      </div>
    </form>
  )
}

export default Input
