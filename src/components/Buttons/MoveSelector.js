import React from 'react'
import { useSelector } from 'react-redux'

import MarkerRed from '../../assets/images/marker-red.svg'
import MarkerYellow from '../../assets/images/marker-yellow.svg'

function MoveSelector({ column }) {
  const { turn } = useSelector((state) => state.game)

  return (
    <button className='btn btn--selector'>
      {turn === 1 && <MarkerRed />}
      {turn === 2 && <MarkerYellow />}
    </button>
  )
}

export default MoveSelector
