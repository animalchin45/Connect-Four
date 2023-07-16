import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Chip from './Chip'
import MoveSelector from './Buttons/MoveSelector'

import BoardWhiteLarge from '../assets/images/board-layer-white-large.svg'
import BoardWhiteSmall from '../assets/images/board-layer-white-small.svg'
import BoardBlackLarge from '../assets/images/board-layer-black-large.svg'
import BoardBlackSmall from '../assets/images/board-layer-black-small.svg'

function Board() {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

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
      <div className='board__holes'>
        <Chip />
      </div>
      <div className='board__black'>
        {!isMobile ? <BoardBlackLarge /> : <BoardBlackSmall />}
      </div>
    </div>
  )
}

export default Board
