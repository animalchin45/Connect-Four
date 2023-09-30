import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Countdown from 'react-countdown'

import HeaderBtn from './Buttons/SmallPill'

import TurnRed from '../assets/images/turn-background-red.svg'
import TurnYellow from '../assets/images/turn-background-yellow.svg'

import { nextTurn, nextRound } from '../features/gameSlice'
import { incrementPlayerScore } from '../features/playerSlice'

function TurnMarker() {
  const dispatch = useDispatch()
  const { turn, winner } = useSelector((state) => state.game)

  const handleNextRound = () => {
    dispatch(nextRound())
    dispatch(incrementPlayerScore(winner))
  }

  const renderedCountdown = ({ seconds }) => {
    return <span>{seconds}s</span>
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
            <Countdown
              key={Date.now() + 15000}
              date={Date.now() + 15000}
              renderer={renderedCountdown}
              onComplete={() => dispatch(nextTurn())}
            />
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className='turn-marker--winner'>
        <p className='heading-xs'>{`Player ${winner}`}</p>
        <p className='heading-lg'>Wins</p>
        <HeaderBtn text={'play again'} action={handleNextRound} />
      </div>
    )
  }
}

export default TurnMarker
