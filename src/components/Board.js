import React from 'react'
import { useMediaQuery } from 'react-responsive'

import BoardWhiteLarge from '../assets/images/board-layer-white-large.svg'
import BoardWhiteSmall from '../assets/images/board-layer-white-small.svg'
import BoardBlackLarge from '../assets/images/board-layer-black-large.svg'
import BoardBlackSmall from '../assets/images/board-layer-black-small.svg'
import MarkerRed from '../assets/images/marker-red.svg'
import MarderYellow from '../assets/images/marker-yellow.svg'

function Board() {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <div className='board'>
      <div className='board__white'>
        {!isMobile ? <BoardWhiteLarge /> : <BoardWhiteSmall />}
      </div>
      <div className='board__black'>
        {!isMobile ? <BoardBlackLarge /> : <BoardBlackSmall />}
      </div>
    </div>
  )
}

export default Board
