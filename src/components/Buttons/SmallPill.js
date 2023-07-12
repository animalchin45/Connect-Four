import React from 'react'

// Pass desired text as prop

function HeaderBtn({ text, action }) {
  return (
    <button className='btn btn--small-pill' onClick={action}>
      <p className='heading-xs'>{text}</p>
    </button>
  )
}

export default HeaderBtn
