import React from 'react'

// Pass text prop for text
// Pass either start or menu for types, this will change text alignment to match design
// Pass color for button color
// Pass action for onClick function

function Options({ text, type, color, action }) {
  return (
    <button
      className={`btn btn--big-pill btn--big-pill--${color} btn--big-pill--options-${type}`}
      onClick={action}
    >
      <p className='heading-md'>{text}</p>
    </button>
  )
}

export default Options
