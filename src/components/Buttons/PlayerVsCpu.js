import React from 'react'

import PlayerVCpu from '../../assets/images/player-vs-cpu.svg'

function PlayerVsCpu() {
  return (
    <button className='btn btn--big-pill btn--big-pill--salmon btn--big-pill--player'>
      <h2>Play vs CPU</h2>
      <PlayerVCpu />
    </button>
  )
}

export default PlayerVsCpu
