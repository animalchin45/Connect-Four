import React from 'react'
import { useDispatch } from 'react-redux'

import PlayerVPlayer from '../../assets/images/player-vs-player.svg'

import { startGame } from '../../features/gameSlice'

function PlayerVsPlayer() {
  const dispatch = useDispatch()

  const handleNewGame = () => {
    dispatch(startGame())
  }

  return (
    <button
      className='btn btn--big-pill btn--big-pill--yellow btn--big-pill--player'
      onClick={handleNewGame}
    >
      <p className='heading-md'>Play vs Player</p>
      <PlayerVPlayer />
    </button>
  )
}

export default PlayerVsPlayer
