import React from 'react'

function Button({ classe }) {
  return (
    <a className={'bg-violet-900 duration-300 hover:bg-violet-700 px-12 py-3 rounded-2xl ' + classe} href="#">Let's Talk</a>
  )
}

export default Button
