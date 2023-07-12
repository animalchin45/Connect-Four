import React from 'react'

import CheckIcon from '../../assets/images/icon-check.svg'

function Check({ action }) {
  return (
    <button className='btn btn--round' onClick={action}>
      <CheckIcon />
    </button>
  )
}

export default Check
