import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { v4 as uuid4 } from 'uuid'

import Chip from './Chip'
import MoveSelector from './Buttons/MoveSelector'

import { chipPosistions } from '../hooks/chipPositions'

import BoardWhiteLarge from '../assets/images/board-layer-white-large.svg'
import BoardWhiteSmall from '../assets/images/board-layer-white-small.svg'
import BoardBlackLarge from '../assets/images/board-layer-black-large.svg'
import BoardBlackSmall from '../assets/images/board-layer-black-small.svg'

function Board() {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const { board } = useSelector((state) => state.game)
  const [chips, setChips] = useState([])

  const renderedChips = chips.map((item) => {
    return <Chip position={item.position} player={item.player} key={uuid4()} />
  })

  useEffect(() => {
    setChips(chipPosistions(board))
  }, [board])

  return (
    <div className='board'>
      <div className='board__selector-container'>
        <MoveSelector column={0} />
        <MoveSelector column={1} />
        <MoveSelector column={2} />
        <MoveSelector column={3} />
        <MoveSelector column={4} />
        <MoveSelector column={5} />
        <MoveSelector column={6} />
      </div>
      <div className='board__white'>
        {!isMobile ? <BoardWhiteLarge /> : <BoardWhiteSmall />}
      </div>
      <div className='board__holes'>{renderedChips}</div>
      <div className='board__black'>
        {!isMobile ? <BoardBlackLarge /> : <BoardBlackSmall />}
      </div>
    </div>
  )
}

export default Board
