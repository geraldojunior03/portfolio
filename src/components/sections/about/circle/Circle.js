import React from 'react'

function Circle({ number, skill }) {
  return (
    <div style={{ strokeDashoffset: `calc(440 - (440 * ${number}) / 100)`}} className={`circle`}>
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
      <div className='percent'>
        <h2>{number}%</h2>
        <small>{skill}</small>
      </div>
    </div>
  )
}

export default Circle
