import React from 'react'

function Input() {
  return (
    <form>
      <div class="input-box">
        <input type="text" placeholder="Enter your name" />
      </div>
      <div class="input-box">
        <input type="text" placeholder="Enter your email" />
      </div>
      <div class="input-box message-box">
        <textarea placeholder="Send me your message" />
      </div>
      <div class="button">
        <input type="button" value="Send Now" />
      </div>
    </form>
  )
}

export default Input
