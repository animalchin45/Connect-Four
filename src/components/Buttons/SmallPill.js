import React from 'react'

// Pass desired text as prop

function HeaderBtn({ text }) {
  return (
    <button className='btn btn--small-pill'>
      <p className='heading-xs'>{text}</p>
    </button>
  )
}

export default HeaderBtn
