import React from 'react'

import PlayerVPlayer from '../../assets/images/player-vs-player.svg'

function PlayerVsPlayer() {
  return (
    <button className='btn btn--big-pill btn--big-pill--yellow btn--big-pill--player'>
      <p className='heading-md'>Play vs Player</p>
      <PlayerVPlayer />
    </button>
  )
}

export default PlayerVsPlayer
