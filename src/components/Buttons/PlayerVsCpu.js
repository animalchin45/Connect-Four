import React from 'react'

import PlayerVCpu from '../../assets/images/player-vs-cpu.svg'

function PlayerVsCpu() {
  return (
    <button className='btn btn--big-pill btn--big-pill--salmon btn--big-pill--player'>
      <p className='heading-md'>Play vs CPU</p>
      <PlayerVCpu />
    </button>
  )
}

export default PlayerVsCpu
