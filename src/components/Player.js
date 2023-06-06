import React from 'react'
import { useSelector } from 'react-redux'

import PlayerOne from '../assets/images/player-one.svg'
import PlayerTwo from '../assets/images/player-two.svg'
// add if i can figure out the cpu player part
import Cpu from '../assets/images/cpu.svg'

function Player({ player }) {
  const { playerOne, playerTwo } = useSelector((state) => state.players)

  return (
    <div className='player'>
      {player === 1 && <PlayerOne />}
      {player === 2 && <PlayerTwo />}
      {player === 3 && <Cpu />}
      <div className='player__score'>
        <h3>{player === 1 ? 'Player 1' : 'Player 2'}</h3>
        <h1>{player === 1 ? playerOne.score : playerTwo.score}</h1>
      </div>
    </div>
  )
}

export default Player
