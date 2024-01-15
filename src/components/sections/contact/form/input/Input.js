import React from "react"

import "./Input.css"

function Input() {
  return (
    <form action="https://api.sheetmonkey.io/form/sAGS8No8sAphSxZMHZXTmi" method="post"> 
      <div className="input-box">
        <input type="text" placeholder="Insira seu nome" name="Nome"/>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Insira seu e-mail" name="Email"/>
      </div>
      <div className="input-box message-box">
        <textarea placeholder="Digite sua mensagem" name="Mensagem"/>
      </div>
      <div className="button">
        <input type="submit" value="Enviar" />
      </div>
    </form>
  )
}

export default Input
