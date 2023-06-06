import React from 'react'

// Pass text prop for text
// Pass either start or menu for types, this will change text alignment to match design

function Options({ text, type }) {
  return (
    <button
      className={`btn btn--big-pill btn--big-pill--white btn--big-pill--options-${type}`}
    >
      <h2>{text}</h2>
    </button>
  )
}

export default Options
