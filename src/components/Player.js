import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'

import PlayerOne from '../assets/images/player-one.svg'
import PlayerTwo from '../assets/images/player-two.svg'
// add if i can figure out the cpu player part
import Cpu from '../assets/images/cpu.svg'

// Pass player 1, 2, or 3 as prop
// Player 1, Player 2, or 3 for a CPU controlled 2nd player

function Player({ player }) {
  const { playerOne, playerTwo } = useSelector((state) => state.players)

  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <div className={`player player--${player === 1 ? 'one' : 'two'}`}>
      {player === 1 && <PlayerOne />}
      {player === 2 && <PlayerTwo />}
      {player === 3 && <Cpu />}
      <div
        className={`player__score player__score--${
          player === 1 ? 'one' : 'two'
        }`}
      >
        <p className={isMobile ? 'heading-xs' : 'heading-sm'}>
          {player === 1 ? 'Player 1' : 'Player 2'}
        </p>
        <p className={isMobile ? 'heading-md' : 'heading-lg'}>
          {player === 1 ? playerOne.score : playerTwo.score}
        </p>
      </div>
    </div>
  )
}

export default Player
