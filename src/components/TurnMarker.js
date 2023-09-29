import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import HeaderBtn from './Buttons/SmallPill'

import TurnRed from '../assets/images/turn-background-red.svg'
import TurnYellow from '../assets/images/turn-background-yellow.svg'

import { reset } from '../features/gameSlice'

function TurnMarker() {
  const dispatch = useDispatch()
  const { turn, winner } = useSelector((state) => state.game)

  const handleReset = () => {
    dispatch(reset())
  }

  if (winner === 0) {
    return (
      <div className='turn-marker'>
        {turn === 1 ? <TurnRed /> : <TurnYellow />}
        <div className='turn-marker__info'>
          <p
            className={`heading-xs turn-marker--player${turn} turn-marker__info__player`}
          >{`Player ${turn}'s Turn`}</p>
          <p
            className={`heading-lg turn-marker--player${turn} turn-marker__info__timer`}
          >
            15s
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className='turn-marker--winner'>
        <p className='heading-xs'>{`Player ${winner}`}</p>
        <p className='heading-lg'>Wins</p>
        <HeaderBtn text={'play again'} action={handleReset} />
      </div>
    )
  }
}

export default TurnMarker
