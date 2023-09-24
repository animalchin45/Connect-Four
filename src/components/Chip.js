import React from 'react'

function Chip({ position, player }) {
  // player color and XY position can be passed as props
  const style = {
    gridColumn: `${position[0]} / ${position[0] + 1}`,
    gridRow: `${position[1]} / ${position[1] + 1}`,
    background: `${player === 1 ? '#fd6687' : '#ffce67'}`,
  }

  return <div className='chip' style={style}></div>
}

export default Chip
