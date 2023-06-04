import React from 'react'

function Options({ text }) {
  return (
    <button className='btn btn--big-pill btn--big-pill--white btn--big-pill--options'>
      {/* pass prop for text */}
      <h2>{text}</h2>
    </button>
  )
}

export default Options
